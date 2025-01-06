import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Provider } from "@/lib/providers"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Image src={provider.logo} alt={provider.name} width={50} height={50} className="rounded-full" />
          <span>{provider.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 mb-4">{provider.description}</p>
        <div className="text-sm mb-4">
          <p><strong>Founded:</strong> {provider.foundedYear}</p>
          <p><strong>Headquarters:</strong> {provider.headquarters}</p>
          <p><strong>Courses Offered:</strong> {provider.coursesOffered.length}</p>
        </div>
        <div className="flex items-center mb-4">
          <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 font-semibold">{provider.rating.toFixed(1)}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {provider.specializations.map((spec, index) => (
            <Badge key={index} variant="secondary">{spec}</Badge>
          ))}
        </div>
      </CardContent>
      <div className="p-4 mt-auto">
        <Link href={`/providers/${provider.id}`} className="text-blue-500 hover:underline">
          View Profile
        </Link>
      </div>
    </Card>
  )
}

