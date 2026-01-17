// File conversion utilities for resume uploads

export async function extractTextFromFile(file: File): Promise<string> {
  const fileType = file.type
  const fileName = file.name.toLowerCase()

  // Plain text files
  if (fileType === 'text/plain' || fileName.endsWith('.txt')) {
    return await file.text()
  }

  // For now, only support .txt files
  // PDF and DOCX parsing requires server-side processing
  throw new Error('Only .txt files are supported. Please convert your resume to plain text format.')
}

export function validateFileType(file: File): { valid: boolean; error?: string } {
  const fileName = file.name.toLowerCase()
  const allowedExtensions = ['.txt']

  const isValid = allowedExtensions.some(ext => fileName.endsWith(ext))

  if (!isValid) {
    return {
      valid: false,
      error: 'Only .txt files are supported. Please save your resume as plain text.'
    }
  }

  return { valid: true }
}
