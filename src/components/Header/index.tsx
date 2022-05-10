import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext';
import { Logo } from './logo';
import { NotificationNav } from './notificationNav';
import { Profile } from './Profile';
import { SerachBox } from './searchBox';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation" 
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="3" 
        />
      )}

      <Logo />

      { isWideVersion && <SerachBox /> }

      

      <Flex
        align="center"
        ml="auto"

      >
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}