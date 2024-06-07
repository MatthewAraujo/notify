"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Typography from "../ui/typography"
import { LucideGithub } from "lucide-react"
import { handleLogin } from "@/lib/api"


export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Login with your Github Account</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button variant="ghost" onClick={handleLogin} className="w-full">
            <Typography variant="p" className="text-black ">
              <LucideGithub className="w-6 h-6 mr-2" />
            </Typography>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
