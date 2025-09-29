import { View, ScrollView } from "react-native";

import ViewEx from "@/components/view";
import TextEx from "@/components/text";
import TextInputEx from "@/components/textInput";
import ButtonEx from "@/components/button";
import ImageEx from "@/components/image";
import ModalEx from "@/components/modal";
import ActivityIndicatorEx from "@/components/activityIndicator";
import FlatListEx from "@/components/flatList";
import SafeAreaViewEx from "@/components/safeAreaView";
import ScrollViewEx from "@/components/scrollView";
import SectionListEx from "@/components/sectionList";
import StatusBarEx from "@/components/statusBar";
import SwitchEx from "@/components/switch";
import TouchableOpacityEx from "@/components/touchableOpacity";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ViewEx />
      <TextEx />
      <TextInputEx />
      <ButtonEx />
      <ImageEx />
      <ModalEx />
      <ActivityIndicatorEx />
      <FlatListEx />
      <SafeAreaViewEx />
      <ScrollViewEx />
      <SectionListEx />
      <StatusBarEx />
      <SwitchEx />
      <TouchableOpacityEx />
    </ScrollView>
  );
}
