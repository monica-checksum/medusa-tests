// Import your functions from the main script file
const {
  getRandomPages,
  getRandomTasksPerPage,
  getRandomTasks,
  addTasksToTable,
  switchScreen,
  pages,
  tasks,
} = require("../dista/index.js");

test("getRandomPages returns an array with length between 1 and 6", () => {
  const randomPages = getRandomPages(pages);
  expect(randomPages.length).toBeGreaterThanOrEqual(1);
  expect(randomPages.length).toBeLessThanOrEqual(6);
});

test("getRandomTasksPerPage returns an array of tasks for the given page", () => {
  const randomTasks = getRandomTasksPerPage(pages[0], tasks);
  expect(randomTasks.length).toBeGreaterThanOrEqual(0);
  expect(randomTasks.length).toBeLessThanOrEqual(7);
});

test("getRandomTasksPerPage returns a unique set of tasks per page", () => {
  const numSamples = 1000;
  const numTests = 10;

  for (let test = 0; test < numTests; test++) {
    const selectedPages = getRandomPages(pages);

    for (const page of selectedPages) {
      const tasksCount = new Map();
      for (let i = 0; i < numSamples; i++) {
        const tasksPerPage = getRandomTasksPerPage(page, tasks);
        const uniqueTasks = new Set(tasksPerPage);
        expect(tasksPerPage.length).toBe(uniqueTasks.size);
      }
    }
  }
});

// Tests for distribution
test("verify even distribution of selected pages", () => {
  const numSamples = 1000000;
  const pagesCount = {};
  const tasksCount = {};

  for (const page of pages) {
    page.count = 0;
  }
  totalPages = 0;
  for (i = 0; i < numSamples; i++) {
    const selectedPages = getRandomPages(pages);
    for (const selectedPage of selectedPages) {
      pages.filter((page) => {
        return page.name === selectedPage.name;
      })[0].count += 1;
      totalPages++;
    }
  }

  for (page of pages) {
    expect(page.count).toBeGreaterThan((totalPages / pages.length) * 0.9);
    expect(page.count).toBeLessThan((totalPages / pages.length) * 1.1);
  }
});

test("verify even distribution of tasks", () => {
  const numSamples = 1000;

  for (i = 0; i < numSamples; i++) {
    const page = getRandomPages(pages)[0];
    const filteredTasks = tasks.filter((task) => {
      return task.page === page.name;
    });
    for (const task of filteredTasks) {
      task.count = 0;
    }
    totalTasks = 0;
    for (k = 0; k < numSamples*10; k++) {
      const selectedTasks = getRandomTasksPerPage(page, tasks);
      for (const selectedTask of selectedTasks) {
        filteredTasks.filter((task) => {
          return task.task === selectedTask;
        })[0].count += 1;
        totalTasks++;
      }
    }
    for (task of filteredTasks) {
      expect(task.count).toBeGreaterThan(
        (totalTasks / filteredTasks.length) * 0.9
      );
      expect(task.count).toBeLessThan(
        (totalTasks / filteredTasks.length) * 1.1
      );
    }
  }
});

test("verify each task is selected at least once", () => {
  const numSamples = 1000;

  for (const task of tasks) {
    task.count = 0;
  }

  for (i = 0; i < numSamples; i++) {
    selectedTasks = getRandomTasks();
    for (const selectedTask of selectedTasks) {
      ts = tasks.filter((task) => {
        return task.task === selectedTask;
      });
      for (const t of ts) {
       t.count += 1
      }
    }
  }


  for (const task of tasks) {
    expect(task.count).toBeGreaterThanOrEqual(1)
  }
});
