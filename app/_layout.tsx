import React from 'react'
import "../global.css"
import { Slot, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Slot/>
      <StatusBar style="auto"/>
    </QueryClientProvider>
  )
}

export default RootLayout