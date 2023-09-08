import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarMenu from "../components/SidebarMenu";

function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                onClick={onOpen}
            >
                <GiHamburgerMenu color="white" size={"18px"} />
            </Box>

            <Drawer onClose={onClose} placement='left' isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bgColor={'transparent'}>
                    <DrawerCloseButton color={"white"} fontSize="xl" />
                    <DrawerBody>
                        <DrawerCloseButton />
                        <SidebarMenu />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
export default MobileDrawer;