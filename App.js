import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const notifications = [
    {
      id: '1',
      title: 'Bước 1 Xác định nhu cầu khách hàng',
      content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
      date: '20/08/2020, 06:00',
    },
    {
      id: '2',
      title: 'Bạn có khách hàng mới!',
      content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
      date: '20/08/2020, 06:00',
    },
    {
      id: '3',
      title: 'Khách hàng được chia sẻ bị trùng',
      content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
      date: '20/08/2020, 06:00',
    },
    {
      id: '4',
      title: 'Khách hàng được thêm bị trùng',
      content: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
      date: '20/08/2020, 06:00',
    },
    {
      id: '5',
      title: 'Công việc sắp đến hạn trong hôm nay',
      content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
      date: '20/08/2020, 06:00',
    },
    {
      id: '6',
      title: 'Công việc đã quá hạn',
      content: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
      date: '20/08/2020, 06:00',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});
