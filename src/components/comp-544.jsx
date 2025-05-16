"use client"

import { AlertCircleIcon, ImageUpIcon, XIcon } from "lucide-react"
import { useEffect } from "react"
import { useFileUpload } from "@/hooks/use-file-upload"

export default function FileUpload({ onFileSelect }) {
  const maxSizeMB = 5
  const maxSize = maxSizeMB * 1024 * 1024

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/*",
    maxSize,
  })

  const previewUrl = files[0]?.preview || null
  const currentFile = files[0]?.file || null

  // Notify parent when file changes
  useEffect(() => {
    if (onFileSelect && currentFile) {
      onFileSelect(currentFile)
    }
  }, [currentFile, onFileSelect])

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="border-input cursor-pointer hover:bg-accent/50 data-[dragging=true]:bg-accent/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none"
        >
          <input {...getInputProps()} className="sr-only" aria-label="Upload file" />
          {previewUrl ? (
            <div className="absolute inset-0">
              <img
                src={previewUrl}
                alt={currentFile?.name || "Uploaded image"}
                className="size-full object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div className="bg-background mb-2 flex size-11 items-center justify-center rounded-full border">
                <ImageUpIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">Drop your image here or click to browse</p>
              <p className="text-muted-foreground text-xs">Max size: {maxSizeMB}MB</p>
            </div>
          )}
        </div>

        {previewUrl && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={() => removeFile(files[0]?.id)}
              className="z-50 flex size-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus-visible:ring-[3px] focus-visible:ring-ring/50"
              aria-label="Remove image"
            >
              <XIcon className="size-4" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className="text-destructive flex items-center gap-1 text-xs" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  )
}