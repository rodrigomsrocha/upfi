import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" w="auto" maxH="600px">
        <ModalBody m="0" p="0" bg="pGray.800">
          <Image
            src={imgUrl}
            w="auto"
            maxH="600px"
            m="0"
            alt="image"
            fit="contain"
          />
        </ModalBody>
        <ModalFooter h="32px" bg="pGray.800" borderBottomRadius="6px">
          <Link
            textDecoration="none"
            href={imgUrl}
            isExternal
            fontSize="0.875rem"
            mr="auto"
            ml="10px"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
