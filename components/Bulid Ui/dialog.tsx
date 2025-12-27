"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

type DynamicDialogProps = {
  open: boolean
  onOpenChange: (v: boolean) => void
  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
}

export function DynamicDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: DynamicDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        {children}

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
