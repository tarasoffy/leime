'use client'

import { Button } from "@heroui/button";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@heroui/modal";
import {Input} from "@heroui/input";
import { useState } from "react";
import React from "react";

interface IMem {
    id: number,
    name: string,
    image: string,
    likes: number
}

interface IProps {
    mem: IMem,
    isOpen: boolean
    onClose: () => void;
    handleEditMem: (mem: IMem) => void;
}

function EditMem ({mem, isOpen, onClose, handleEditMem}: IProps){
    const [name, setName] = useState(mem.name);
    const [image, setImage] = useState(mem.image);
    const [likes, setLikes] = useState(mem.likes);

    const handleDone = () => {
        if(name.length < 3 || name.length > 100) {
            return alert('min length 3, max length 100')
        } else {
            handleEditMem({id: mem.id, name, image, likes})
            onClose()
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Mem</ModalHeader>
              <ModalBody>
                <Input label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <Input label="Image" type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                <Input label="Likes" type="number" value={String(likes)} onChange={(e) => setLikes(Number(e.target.value))}/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleDone}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
}

export default React.memo(EditMem)