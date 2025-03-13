import React from 'react'
import "../global.css"
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar style="auto"/>
    </QueryClientProvider>
  )
}

export default RootLayout