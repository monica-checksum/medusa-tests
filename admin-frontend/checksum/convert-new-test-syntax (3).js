const fs = require("fs")
const path = require("path")
const glob = require("glob")

function processFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err)
      return
    }

    // Split file content into lines for easier manipulation
    const lines = data.split("\n")
    const editedLines = []
    let inAwaitPageBlock = false
    let inAwaitExpectBlock = false
    let buffer = []

    lines.forEach((line) => {
      const trimmedLine = line.trim()

      // Check for the start of an await page block
      if (trimmedLine.startsWith("await page")) {
        inAwaitPageBlock = true
        buffer.push(line)
        return
      }

      // Check for the end of an await page block
      if (inAwaitPageBlock) {
        buffer.push(line)
        if (trimmedLine.endsWith(";")) {
          inAwaitPageBlock = false
          const block = buffer.join("\n")
          const editedBlock = block.replace(
            /(await page[\s\S]*?)\.checksumAI\((.*)\)([\s\S]*?);/,
            (match, p1, p2, p3) => {
              return `await checksumAI(${p2}, () => ${p1
                .replace("await", "")
                .trim()}${p3.trim()});`
            }
          )
          editedLines.push(editedBlock)
          buffer = []
        }
        return
      }

      // Check for the start of an await expect block
      if (trimmedLine.startsWith("await expect")) {
        inAwaitExpectBlock = true
        buffer.push(line)
        return
      }

      // Check for the end of an await expect block
      if (inAwaitExpectBlock) {
        buffer.push(line.trim())
        if (trimmedLine.endsWith(";")) {
          inAwaitExpectBlock = false
          const block = buffer.join("")
          const editedBlock = block.replace(
            /await expect\((.*)\)\.checksumAI\((.*)\)([\s\S]*?;)/,
            (match, expect, thought, action) => {
              return `await expect(${expect}, ${thought})${action}`
            }
          )
          editedLines.push(editedBlock)
          buffer = []
        }
        return
      }

      // Add lines that are not part of the specific blocks
      editedLines.push(line)
    })

    // Join the edited lines back into a single string
    const editedData = editedLines.join("\n")

    // Write the edited content back to the file
    fs.writeFile(file, editedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err)
      } else {
        console.log(`File ${file} has been edited.`)
      }
    })
  })
}

function editChecksumFiles() {
  // Find all files ending with ".checksum.spec.ts"
  glob("**/*.checksum.spec.ts", (err, files) => {
    if (err) {
      console.error("Error finding files:", err)
      return
    }

    files.forEach((file) => processFile(file))
  })
}

processFile(
  "/Users/galvered/Dev/customers/github-app-test/admin-frontend/checksum/tests/Unpublish a product from the product table (vh3Lz).checksum.spec.ts"
)

// editChecksumFiles();
