import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './logo';
import { NotificationNav } from './notificationNav';
import { Profile } from './Profile';
import { SerachBox } from './searchBox';

export function Header() {
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