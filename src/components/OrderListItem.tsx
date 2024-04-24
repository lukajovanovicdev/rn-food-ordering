import { Order, OrderStatus } from '@/types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link, useSegments } from 'expo-router';

dayjs.extend(relativeTime);

type OrderCardProps = {
  order: Order;
};

export function OrderCard({ order }: OrderCardProps) {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable>
        <View className="bg-white rounded-lg p-4 flex flex-row items-center">
          <Text className="text-gray-900">{order.id}</Text>
          <Text className="text-gray-900 ml-4">{`${dayjs(order.created_at).fromNow()}`}</Text>
          <View className="ml-auto">
            <StatusIndicator status={order.status} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

type StatusIndicatorProps = {
  status: OrderStatus;
};

function StatusIndicator({ status }: StatusIndicatorProps) {
  const statusToColor = {
    New: 'text-orange-500',
    Cooking: 'text-blue-500',
    Delivering: 'text-blue-500',
    Delivered: 'text-green-500',
  };

  const color = statusToColor[status] || 'text-gray-500';

  return (
    <Text className={'text-lg font-bold ' + color}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Text>
  );
}
