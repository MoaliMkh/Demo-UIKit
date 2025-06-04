import { useState } from "react";
import { View } from "react-native";
import CustomTextInput from "./components/CustomTextInput";
import borderRadius from "./tokens/borderRadius";
import borderWidth from "./tokens/borderWidth";

export default function Index() {
  const [value, setValue] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: borderWidth.small,
        borderRadius: borderRadius.radiusXLarge,
      }}
    >
      <View style={{ padding: 16 }}>
        {/* Default */}
        <CustomTextInput
          label="تایتل"
          placeholder="محتوا / پلیس هولدر"
          value={value}
          onChangeText={setValue}
          helperText="کپشن و هرگونه اطلاعات در مورد اینپوت در اینجا نوشته می‌شود"
          showSearchIcon
          showClearIcon
          onClear={() => setValue("")}
          style={{ direction: "rtl" }}
        />

        {/* Success */}
        <CustomTextInput
          label="تایتل"
          placeholder="محتوا / پلیس هولدر"
          value={value}
          onChangeText={setValue}
          status="success"
          message="محتوای اینپوت اعتبار دارد"
          showSearchIcon
          showClearIcon
          onClear={() => setValue("")}
          style={{ marginTop: 24 }}
        />

        {/* Error */}
        <CustomTextInput
          label="تایتل"
          placeholder="محتوا / پلیس هولدر"
          value={value}
          onChangeText={setValue}
          status="error"
          message="محتوای اینپوت صحیح نیست"
          showSearchIcon
          showClearIcon
          onClear={() => setValue("")}
          style={{ marginTop: 24 }}
        />
      </View>
    </View>
  );
}
