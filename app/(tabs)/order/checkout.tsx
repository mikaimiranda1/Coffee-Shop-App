import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function CheckoutScreen() {
    
    const [name, setName] = useState("");
    const [pickupType, setPickupType] = useState<"asap" | "scheduled">("asap");
    const [notes, setNotes] = useState("");

    return (
        <View style={{ flex:1, padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>Pickup</Text>

            <Text style={{ marginTop: 16, fontWeight: "600" }}>Name</Text>

            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="mikai"
                style={{
                    marginTop: 8,
                    borderWidth: 1,
                    borderRadius: 12,
                    padding:12,
                }}
            />

            <Text style={{ marginTop: 16, fontWeight: "600" }}>Pickup time</Text>
            
            <View style={{ flexDirection: "row", gap: 10, marginTop: 8}}>
                <Pressable
                    onPress={() => setPickupType("asap")}
                    style={{
                        flex: 1,
                        padding: 12,
                        borderRadius: 12,
                        borderWidth: 1, 
                        backgroundColor: pickupType == "asap" ? "black" : "white",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: pickupType === "asap" ? "white" : "black" }}>
                        ASAP
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => setPickupType("scheduled")}
                    style={{
                        flex:1, 
                        padding: 12,
                        borderRadius: 12,
                        borderWidth: 1,
                        backgroundColor: pickupType === "scheduled" ? "black" : "white",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: pickupType === "scheduled" ? "white" : "black" }}>
                        Schedule
                    </Text>
                </Pressable>
            </View>

            {pickupType === "scheduled" && (
                <Text style={{ marginTop: 10 }}>
                    Next step: add time picker here (next step).
                </Text>
            )}

            <Text style={{ marginTop: 16, fontWeight: "600" }}>Notes</Text>
            <TextInput
                value={notes}
                onChangeText={setNotes}
                placeholder="No ice, extra hot, etc."
                style={{
                    marginTop: 8,
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 12,
                    height: 90,
                    textAlignVertical: "top",
                }}
                multiline
            />

            <Pressable
                onPress={() => {
                    // Later: submit order to Firebase
                    alert("Order submitted (placeholder)");
                }}
                style={{
                    marginTop: 20,
                    padding: 14,
                    borderRadius: 12,
                    backgroundColor: "black",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white", fontWeight: "700" }}>Place Order</Text>
            </Pressable>
        </View>
    );
}