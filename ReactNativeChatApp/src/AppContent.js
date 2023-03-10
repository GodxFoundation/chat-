import React from 'react'
import { StatusBar } from 'react-native'
import { OnboardingConfigProvider } from './Core/onboarding/hooks/useOnboardingConfig'
import { AppNavigator } from './navigation/AppNavigation'
import { useConfig } from './config'
import { ProfileConfigProvider } from './Core/profile/hooks/useProfileConfig'

const MainNavigator =
    AppNavigator

export default AppContent = () => {
  const config = useConfig()
  return (
    <ProfileConfigProvider config={config}>
      <OnboardingConfigProvider config={config}>
        <StatusBar />
        <MainNavigator />
      </OnboardingConfigProvider>
    </ProfileConfigProvider>
  )
}
