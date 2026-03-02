"use client"

import { CopyIcon, SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SmartphoneIcon size={18} className="text-primary" />
        <p className="text-sm">{phone}</p>
      </div>
      <Button size="icon" variant="secondary" onClick={handleCopy}>
        <CopyIcon size={12} className="text-primary" />
      </Button>
    </div>
  )
}

export default PhoneItem
