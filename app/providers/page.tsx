"use client"

import { useState } from "react"
import { providers, searchProviders, Provider } from "@/lib/providers"
import { ProviderCard } from "@/components/provider-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>(providers)

  const handleSearch = () => {
    let results = searchProviders(searchQuery)
    if (specialization) {
      results = results.filter(provider => provider.specializations.includes(specialization))
    }
    setFilteredProviders(results)
  }

  const allSpecializations = Array.from(new Set(providers.flatMap(p => p.specializations)))

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Course Providers</h1>
      <div className="mb-8 flex gap-4">
        <Input
          type="text"
          placeholder="Search providers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Select value={specialization} onValueChange={setSpecialization}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Specializations</SelectItem>
            {allSpecializations.map((spec) => (
              <SelectItem key={spec} value={spec}>{spec}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProviders.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <Link href="/" className="text-blue-500 hover:underline">
          &larr; Back to home
        </Link>
        <Link href="/providers/compare" className="text-blue-500 hover:underline">
          Compare Providers &rarr;
        </Link>
      </div>
    </div>
  )
}

