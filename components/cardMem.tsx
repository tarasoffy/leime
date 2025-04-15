import {Card, CardHeader, CardBody} from "@heroui/card";
import {Image} from "@heroui/image";

interface IMem {
    id: number,
    name: string,
    image: string,
    likes: number
}

interface IProps {
    mem: IMem
}

const CardMem = ({mem}: IProps) => {
    return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <a href={mem.image} className="text-tiny break-all">{mem.image}</a>
        <small className="text-default-500">{mem.likes} Likes</small>
        <h4 className="font-bold text-large">{mem.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={mem.image}
        />
      </CardBody>
    </Card>
    )
}

export default CardMem