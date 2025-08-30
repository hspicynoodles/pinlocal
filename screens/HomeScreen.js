// App.js

import React, { useMemo, useState, useCallback } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, RefreshControl, Alert, StatusBar, Switch } from "react-native";

// pins should contain id, title, img, tag, hasDeal
const SAMPLE = [
    { id: "1", title: "Hand-poured Candle", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800", tag: "Coffee", hasDeal: true },
    { id: "2", title: "Local Coffee Beans", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800", tag: "Coffee", hasDeal: true },
    { id: "3", title: "Clay Earrings", img: "https://images.unsplash.com/photo-1503342452485-86ff0a8bccc5?q=80&w=800", tag: "Jewelry", hasDeal: false },
    { id: "4", title: "Artisanal Soap", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800", tag: "Beauty", hasDeal: false },
    { id: "5", title: "Plant Shop", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800", tag: "Plants", hasDeal: false },
    { id: "6", title: "Vintage Mugs", img: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=800", tag: "Kitchen", hasDeal: false },
    { id: "7", title: "Macramé Hanger", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800", tag: "Home", hasDeal: true },
    { id: "8", title: "Leather Wallet", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800", tag: "Accessories", hasDeal: false },
    { id: "9", title: "Matcha Kit", img: "https://images.unsplash.com/photo-1504730653778-9c7863c95c5f?q=80&w=800", tag: "Food", hasDeal: false },
    { id: "10", title: "Handmade Tote", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800", tag: "Fashion", hasDeal: false },
];

// Random height helpers to mimic Pinterest look
const heights = [180, 220, 260, 300];


//Home Screen

export default function App() {
    // filters 
    const [dealsOnly, setDealsOnly] = useState(false);
    const [filterOnly, setFilter] = useState(null);

    //mapping of the pins 
    const [pins, setPins] = useState(() =>
        SAMPLE.map((p, idx) => ({ ...p, h: heights[idx % heights.length] }))
    );

    const visiblePins = useMemo(() => {
        // If filter is ON, keep only pins with hasDeal === true.
        // If OFF, show everything.

        return dealsOnly ? pins.filter((p) => p.hasDeal) : pins;
    }, [dealsOnly, pins]);

    // refresh control
    const [refreshing, setRefreshing] = useState(false);

    // Split into two balanced columns
    const columns = useMemo(() => {
        const left = [];
        const right = [];
        let lh = 0, rh = 0;
        for (const it of visiblePins) {
            if (lh <= rh) { left.push(it); lh += it.h; }
            else { right.push(it); rh += it.h; }
        }
        return [left, right];
    }, [visiblePins]);


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // simulate refresh
        setTimeout(() => {
            setPins((prev) =>
                // shuffle + tweak heights for variety
                prev
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .map((p, i) => ({ ...p, h: heights[(i + 1) % heights.length] }))
            );
            setRefreshing(false);
        }, 600);
    }, []);


    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.brand}>PinLocal</Text>
                <TouchableOpacity
                    onPress={() => setDealsOnly((v) => !v)}
                    value={dealsOnly}
                    onValueChange={setDealsOnly}>
                    <Text>Deals Only</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setDealsOnly((v) => !v)}
                    value={dealsOnly}
                    onValueChange={setDealsOnly}>
                    <Text>Deals Only</Text>
                </TouchableOpacity>


            </View>
            <FlatList
                data={['grid']}                 // a single row
                extraData={columns}         // re-render when pins change
                keyExtractor={(x) => x}
                renderItem={() => (
                    <View style={styles.columns}>
                        <View style={styles.col}>
                            {columns[0].map((item) => (
                                <PinCard key={item.id} item={item} />
                            ))}
                        </View>
                        <View style={styles.col}>
                            {columns[1].map((item) => (
                                <PinCard key={item.id} item={item} />
                            ))}
                        </View>
                    </View>
                )}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                onEndReachedThreshold={0.4}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 48 }}
            />


        </SafeAreaView>
    );
}




function PinCard({ item }) {
    return (
        <View style={[styles.card, { height: item.h }]}>
            <Image
                source={{ uri: item.img }}
                style={styles.image}
                resizeMode="cover"
            />
            <Text numberOfLines={1} style={styles.title}>
                {item.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: "#FFFFFF" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 10,
        justifyContent: "space-between",
    },
    brand: { fontSize: 24, fontWeight: "800", letterSpacing: 0.3 },
    addBtn: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: "#111",
    },
    addTxt: { color: "#fff", fontWeight: "700" },

    columns: { flexDirection: "row", gap: 10 },
    col: { flex: 1, gap: 10 },

    card: {
        borderRadius: 14,
        overflow: "hidden",
        backgroundColor: "#F2F2F2",
    },
    image: { width: "100%", height: "85%" },
    title: { paddingHorizontal: 8, paddingVertical: 8, fontWeight: "600" },

    fab: {
        position: "absolute",
        right: 16,
        bottom: 24,
        backgroundColor: "#111",
        width: 54,
        height: 54,
        borderRadius: 27,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
    },
    fabTxt: { color: "#fff", fontSize: 28, lineHeight: 30, fontWeight: "800" },
});
