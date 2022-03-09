import SegmentedControl from 'rn-segmented-control';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function IndicatorViewPager() {
  const [tabIndex1, setTabIndex1] = React.useState(0);
  const ref = React.useRef(PagerView)
  return (
    <View style={styles.container}>
       <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2', 'Label 3']}
          onChange={(index) => {
            setTabIndex1(index)
            ref.current.setPage(index)
          }}
          currentIndex={tabIndex1}
        />
      </View>
      <PagerView 
        ref={ref}
        style={styles.pagerView} 
        initialPage={0}
        scrollEnabled={true}
        onPageSelected={e => {
          const myPages = e.nativeEvent.position;
          setTabIndex1(myPages)
        }}
      >
        <View style={{backgroundColor: 'red'}} key={1}>
          <Text>First page</Text>
        </View>
        <View style={{backgroundColor: 'yellow'}} key={2}>
          <Text>Second page</Text>
        </View>
        <View style={{backgroundColor: 'green'}} key={3}>
          <Text>Third page</Text>
        </View>
     </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  box: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  customBlackColor: {
    color: 'black',
  },
  customWhiteColor: {
    color: 'white',
  },
  customGreenColor: {
    color: '#3f6212',
  },
  customBlueColor: {
    backgroundColor: '#e0f2fe',
  },
  customBlueTextColor: {
    color: '#0369a1',
  },
  customBadgeBlueColor: {
    backgroundColor: '#38bdf8',
  },
});