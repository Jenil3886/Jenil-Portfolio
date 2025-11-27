import { PERSONAL_INFO } from "@/data/personal-info"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeSpaces(str: string) {
  return str.replace(/\s+/g, '')
}

export const getResumeDownloadLink = () => {
  return `${PERSONAL_INFO.fullName
    .split(' ')
    .join('-')
    .toLowerCase()}-resume.pdf`
}