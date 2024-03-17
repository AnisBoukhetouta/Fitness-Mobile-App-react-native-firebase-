import { LineChart } from "react-native-gifted-charts";
import React from "react";
import { View, Text, Dimensions } from "react-native";

export default function RenderProgressGraphs({
  category,
  caloriesLineData,
  weightLineData,
  timeLineData,
}) {
  if (!caloriesLineData || !weightLineData || !timeLineData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No data available</Text>
      </View>
    );
  }

  if (category === "Weight") {
    return (
      <LineChart
        isAnimated
        width={Dimensions.get("window").width * 0.8}
        animationDuration={1200}
        initialSpacing={20}
        data={weightLineData}
        spacing={40}
        yAxisThickness={0}
        xAxisThickness={0}
        rulesColor="#0B0B0B"
        rulesType="solid"
        xAxisColor="#50535B"
        color="#157AFF"
        dataPointsColor="#157AFF"
        pointerConfig={{
          pointerStripUptoDataPoint: false,
          pointerVanishDelay: 600000,
          pointerStripColor: "#0496FF",
          pointerStripWidth: 2,
          pointerStripHeight: 160,
          strokeDashArray: [2, 5],
          pointerColor: "#0496FF",
          radius: 5,
          pointerLabelWidth: 100,
          pointerLabelHeight: 40,
          activatePointersOnLongPress: true,
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 40,
                  width: 50,
                  backgroundColor: "#0496FF",
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 999,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 9,
                  }}
                >
                  1 / 1
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 11,
                  }}
                >
                  {items[0].value} Kcal
                </Text>
              </View>
            );
          },
        }}
      />
    );
  } else if (category === "Time") {
    return (
      <LineChart
        isAnimated
        width={Dimensions.get("window").width * 0.8}
        animationDuration={1200}
        initialSpacing={20}
        data={timeLineData}
        spacing={40}
        yAxisThickness={0}
        xAxisThickness={0}
        rulesColor="#0B0B0B"
        rulesType="solid"
        xAxisColor="#50535B"
        color="#157AFF"
        dataPointsColor="#157AFF"
        pointerConfig={{
          pointerStripUptoDataPoint: false,
          pointerVanishDelay: 600000,
          pointerStripColor: "#0496FF",
          pointerStripWidth: 2,
          pointerStripHeight: 160,
          strokeDashArray: [2, 5],
          pointerColor: "#0496FF",
          radius: 5,
          pointerLabelWidth: 100,
          pointerLabelHeight: 40,
          activatePointersOnLongPress: true,
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 40,
                  width: 50,
                  backgroundColor: "#0496FF",
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 999,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 9,
                  }}
                >
                  1 / 1
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 11,
                  }}
                >
                  {items[0].value} Kcal
                </Text>
              </View>
            );
          },
        }}
      />
    );
  } else if (category === "Calories") {
    return (
      <LineChart
        isAnimated
        width={Dimensions.get("window").width * 0.8}
        animationDuration={1200}
        initialSpacing={20}
        data={caloriesLineData}
        spacing={40}
        yAxisThickness={0}
        xAxisThickness={0}
        rulesColor="#0B0B0B"
        rulesType="solid"
        xAxisColor="#50535B"
        color="#157AFF"
        dataPointsColor="#157AFF"
        pointerConfig={{
          pointerStripUptoDataPoint: false,
          pointerVanishDelay: 600000,
          pointerStripColor: "#0496FF",
          pointerStripWidth: 2,
          pointerStripHeight: 160,
          strokeDashArray: [2, 5],
          pointerColor: "#0496FF",
          radius: 5,
          pointerLabelWidth: 100,
          pointerLabelHeight: 40,
          activatePointersOnLongPress: true,
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 40,
                  width: 50,
                  backgroundColor: "#0496FF",
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 999,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 9,
                  }}
                >
                  1 / 1
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 11,
                  }}
                >
                  {items[0].value} Kcal
                </Text>
              </View>
            );
          },
        }}
      />
    );
  }
}
