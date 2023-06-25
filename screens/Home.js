import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable, Linking, PermissionsAndroid, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { StatusBar } from 'expo-status-bar';
import colors from '../components/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import CallDetectorManager from 'react-native-call-detection';




const Home = () => {

    const [phoneContacts, setPhoneContacts] = useState([]);



    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });
                if (data.length > 0) {
                    setPhoneContacts(data)

                }
            }
        })();
    }, []);



    useEffect(() => {
        requestPhonePermission();
    }, []);

    const requestPhonePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
                {
                    title: 'Phone Permission',
                    message: 'This app needs access to your phone state.',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Phone permission granted');
                // ทำสิ่งที่คุณต้องการเมื่อได้รับการอนุญาต
                startCallDetection();
            } else {
                console.log('Phone permission denied');
                // ทำสิ่งที่คุณต้องการเมื่อไม่ได้รับการอนุญาต
            }
        } catch (error) {
            console.log('Error requesting phone permission:', error);
        }
    };

    const startCallDetection = () => {
        const callDetector = new CallDetectorManager(
            (event, phoneNumber) => {
                if (event === 'Incoming') {
                    console.log('Incoming call:', phoneNumber);
                    setIncomingCall(phoneNumber);
                } else if (event === 'Disconnected') {
                    console.log('Call ended');
                    setIncomingCall(null);
                }
            },
            true
        );
    };


    /*    useEffect(() => {
           (async () => {
               const { status } = await Contacts.requestPermissionsAsync();
               if (status === 'granted') {
   
                   const callDetector = new CallDetectorManager(
                       (event, phoneNumber) => {
                           if (event === 'Incoming') {
                               // ตรวจจับการโทรเข้า
                               console.log('Incoming call:', phoneNumber);
                               // ทำสิ่งที่คุณต้องการเมื่อมีการโทรเข้า
                           } else if (event === 'Offhook') {
                               // ตรวจจับการโทรออก
                               console.log('Outgoing call:', phoneNumber);
                               // ทำสิ่งที่คุณต้องการเมื่อมีการโทรออก
                           } else if (event === 'Disconnected') {
                               // ตรวจจับการโทรสิ้นสุด
                               console.log('Call ended');
                               // ทำสิ่งที่คุณต้องการเมื่อการโทรสิ้นสุดลง
                           }
                       },
                       true // คุณสามารถใช้พารามิเตอร์นี้เพื่อให้ได้รับเหตุการณ์เมื่อไม่ใช่โทรศัพท์ (เช่น สายโทรออกอยู่)
                   );
                   console.log("callDetector", callDetector);
   
               }
           })();
       }, []);
    */










    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.textAppName}>Call Credit Checker</Text>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                {phoneContacts.map((contact) => {

                    if (contact.phoneNumbers && contact.phoneNumbers.length > 0) {
                        /* console.log("contact", contact.phoneNumbers[0].number); */
                        // สามารถใส่โค้ด JSX สำหรับแสดงข้อมูลที่ต้องการได้ที่นี่
                        return (
                            <View key={contact.id} style={styles.containerName}>
                                <View style={styles.viewicon}>
                                    <View style={styles.backguunIcon}>
                                        <Icon name="user" size={25} color={colors.white} />
                                    </View>
                                    <View>
                                        <Text style={styles.textname}> {contact.firstName}</Text>
                                        <Text style={styles.textphone}>{contact.phoneNumbers[0].number}</Text>
                                    </View>
                                </View>

                                <Pressable onPress={() => Linking.openURL(`tel:${contact.phoneNumbers[0].number}`)}>
                                    <View style={styles.iconphone}>
                                        <Icon name="phone" size={22} color={colors.red} />
                                    </View>
                                </Pressable>

                            </View>
                        )
                    }
                })}
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 40
    },
    head: {
        height: 100,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundColor: colors.red33,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    textAppName: {
        fontSize: 18,
        color: colors.white
    },
    containerName: {
        flexDirection: "row",
        paddingBottom: 20,
        justifyContent: "space-between"
    },
    backguunIcon: {
        backgroundColor: colors.red,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    viewicon: {
        flexDirection: "row"
    },
    textname: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    textphone: {
        marginLeft: 16,
        fontSize: 14
    },
    iconphone: {
        width: 30,
        paddingLeft: 6,
    }

});
export default Home