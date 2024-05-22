import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
export default function Home() {
  const data = [
    {
      title: "Good Activity",
      label: "You managed the crisis",
      icon: ":)",
      description: "",
      context: ""
    },
    {
      title: "General Activity",
      label: "Nothing special today",
      icon: ":|",
      description: "",
      context: ""
    },
    {
      title: "Bad Activity",
      label: "Well, that went down road",
      icon: ":(",
      description: "",
      context: ""
    }
  ]
  return (
    <main>
      <div>

      </div>
      <div>
        <Drawer>
          <div className="absolute  inset-x-0  bottom-0">
            {data.map((item, index) => (
              <Card className="p-4 m-4">
                <DrawerTrigger className="flex flex-col" key={index}>
                  <div>
                    <div className="text-2xl">
                    {item.icon} --- {item.title}
                    </div>
                    <div>
                      {item.label}
                    </div>
                  </div>
                </DrawerTrigger>
              </Card>
            ))}</div>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </main>
  );
}