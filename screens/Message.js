import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';



const Message = () => {
    useEffect(() => {
        requestSMSPermissions()
    }, []);

    const requestSMSPermissions = async () => {
        const { status } = await SMS.requestSMSPermissionsAsync();

        if (status === 'granted') {
            console.log('ได้รับอนุญาติให้เข้าถึงข้อความ SMS');
            // เรียกใช้ฟังก์ชันสำหรับอ่านข้อความ SMS
            readSMS();
        } else {
            console.log('ไม่ได้รับอนุญาติให้เข้าถึงข้อความ SMS');
        }
    };
    const readSMS = async () => {
        const { sms } = await SMS.getSMSAsync();

        if (sms && sms.length > 0) {
            console.log('ข้อความที่ถูกส่งเข้ามาผ่าน SMS:');
            console.log(sms);
        } else {
            console.log('ไม่มีข้อความที่ถูกส่งเข้ามาผ่าน SMS');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.greenText}>This text is green Message</Text>
            <View style={styles.greenBox} />
            <View style={styles.otherBox} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenText: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        marginVertical: 10,
    },
    otherBox: {
        width: 150,
        height: 150,
        backgroundColor: 'lightgreen',
    },
});

export default Message;
