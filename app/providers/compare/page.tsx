"use client"

import { useState } from "react"
import { providers, Provider } from "@/lib/providers"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StarIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ProviderComparisonPage() {
  const [selectedProviders, setSelectedProviders] = useState<Provider[]>([])

  const handleProviderSelect = (providerId: string) => {
    const provider = providers.find(p => p.id === providerId)
    if (provider) {
      setSelectedProviders(prev => [...prev, provider].slice(0, 3))
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Compare Providers</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select up to 3 providers to compare:</h2>
        <div className="flex gap-4">
          {[1, 2, 3].map((index) => (
            <Select key={index} onValueChange={handleProviderSelect}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={`Select provider ${index}`} />
              </SelectTrigger>
              <SelectContent>
                {providers.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id}>
                    {provider.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>
      </div>
      {selectedProviders.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Provider Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  {selectedProviders.map((provider) => (
                    <TableHead key={provider.id}>
                      <div className="flex flex-col items-center">
                        <Image src={provider.logo} alt={provider.name} width={50} height={50} className="rounded-full mb-2" />
                        {provider.name}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Founded</TableCell>
                  {selectedProviders.map((provider) => (
                    <TableCell key={provider.id}>{provider.foundedYear}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Headquarters</TableCell>
                  {selectedProviders.map((provider) => (
                    <TableCell key={provider.id}>{provider.headquarters}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Courses Offered</TableCell>
                  {selectedProviders.map((provider) => (
                    <TableCell key={provider.id}>{provider.coursesOffered.length}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Specializations</TableCell>
                  {selectedProviders.map((provider) => (
                    <TableCell key={provider.id}>
                      {provider.specializations.join(", ")}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Rating</TableCell>
                  {selectedProviders.map((provider) => (
                    <TableCell key={provider.id}>
                      <div className="flex items-center">
                        <StarIcon className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                        {provider.rating.toFixed(1)}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Website</TableCell>
                  {selectedProviders.map((provider) => (
                    <TableCell key={provider.id}>
                      <a href={provider.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {provider.website}
                      </a>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
      <div className="mt-8">
        <Link href="/providers" className="text-blue-500 hover:underline">
          &larr; Back to all providers
        </Link>
      </div>
    </div>
  )
}

