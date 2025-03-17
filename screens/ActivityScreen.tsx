import { ScrollView } from "react-native";
import React from "react";

import { Activity, ActivityProps } from "@/components/Activity";

import { TopInset } from "@/components/TopInsets";
import { PageHeader } from "@/components/PageHeader";

import { ActivityLoader } from "@/components/ActivityLoader";
import { useQuery } from "@tanstack/react-query";

const activitiesQueryFn = async () =>
  await fetch("/api/activities").then((res) => res.json());

function useActivities() {
  const { data, isLoading } = useQuery({
    queryFn: activitiesQueryFn,
    queryKey: ["activities"],
  });

  return { activities: data as ActivityProps[], isLoading };
}

export function ActivityScreen() {
  const { isLoading, activities } = useActivities();
  return (
    <TopInset>
      <PageHeader title="Activity" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>
        {isLoading ? (
          <ActivityLoader />
        ) : (
          activities.map((activity, index) => (
            <Activity key={index} {...activity} />
          ))
        )}
      </ScrollView>
    </TopInset>
  );
}
