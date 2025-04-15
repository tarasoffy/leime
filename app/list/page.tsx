import { CardMem } from "@/components/cardMem";
import { mems } from "@/mock/mems";

export default function ListPage() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {mems.map(item => <CardMem key={item.id} mem={item}/>)}
    </section>
  );
}
