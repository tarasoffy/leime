'use client'

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/table";
import {Button} from "@heroui/button";
import { mems } from "@/mock/mems";
import { EditMem } from "@/components/editMem";
import { useCallback, useState } from "react";

interface IMem {
  id: number,
  name: string,
  image: string,
  likes: number
}

export default function Home() {
  const [selectedMem, setSelectedMem] = useState<IMem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [memsState, setMems] = useState(mems)
  
  const handleEditClick = (mem: IMem) => {
    setSelectedMem(mem);
    setIsOpen(true);
  };

  const handleEditMem = useCallback((updatedMem: IMem) => {
    setMems((prevMems) =>
      prevMems.map(mem =>
        mem.id === updatedMem.id ? updatedMem : mem
      )
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Id</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Image</TableColumn>
        <TableColumn>Likes</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {memsState.map(item => (
          <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.image}</TableCell>
          <TableCell>{item.likes}</TableCell>
          <TableCell>
            <Button onPress={() => handleEditClick(item)}>Edit</Button>
          </TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
    {selectedMem && (
      <EditMem
        mem={selectedMem}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleEditMem={handleEditMem}
      />
    )}
    </section>
  );
}
