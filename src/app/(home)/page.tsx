import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="">
        <Button variant="elevated">Click me</Button>
      </div>
      <div className="">
        <Input placeholder="input" />
      </div>
      <div className="">
        <Progress value={80} />
      </div>

      <div className="">
        <Textarea placeholder="textarea" />
      </div>
      <div className="">
        <Checkbox />
      </div>
    </div>
  )
}
