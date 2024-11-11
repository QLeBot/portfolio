import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardWithForm = () => {
  return (
    <Card className="w-100 h-80 mx-5 my-5 rounded-lg bg-black text-white shadow-lg border-none p-0 transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Project</CardTitle>
        <CardDescription className="text-sm opacity-75">Project Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base">Card Content</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs opacity-75">Card Footer</p>
      </CardFooter>
    </Card>
  )
}


export default CardWithForm;