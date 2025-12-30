import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const GeneratingLoader = () => {
  // Document animation
  const documentSlide = useRef(new Animated.Value(0)).current;
  const documentOpacity = useRef(new Animated.Value(0)).current;
  
  // Progress bar
  const progressWidth = useRef(new Animated.Value(0)).current;
  
  // Typing indicator dots
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;
  
  // Floating lines animation
  const lines = useRef(
    Array(5).fill(0).map(() => ({
      translateX: new Animated.Value(-300),
      opacity: new Animated.Value(0),
    }))
  ).current;
  
  // Sparkle animations
  const sparkles = useRef(
    Array(6).fill(0).map(() => ({
      scale: new Animated.Value(0),
      opacity: new Animated.Value(0),
      rotate: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    // Document slide in animation
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(documentSlide, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(documentOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(500),
        Animated.parallel([
          Animated.timing(documentSlide, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(documentOpacity, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();

    // Progress bar animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(progressWidth, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(progressWidth, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Typing dots animation
    const dotAnimation = (dot, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(dot, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    dotAnimation(dot1, 0);
    dotAnimation(dot2, 200);
    dotAnimation(dot3, 400);

    // Lines flying animation
    lines.forEach((line, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 300),
          Animated.parallel([
            Animated.timing(line.translateX, {
              toValue: 300,
              duration: 2000,
              useNativeDriver: true,
            }),
            Animated.timing(line.opacity, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }),
          ]),
          Animated.timing(line.opacity, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(line.translateX, {
            toValue: -300,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });

    // Sparkles animation
    sparkles.forEach((sparkle, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 400),
          Animated.parallel([
            Animated.timing(sparkle.scale, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(sparkle.opacity, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(sparkle.rotate, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(sparkle.scale, {
              toValue: 0,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(sparkle.opacity, {
              toValue: 0,
              duration: 600,
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    });
  }, []);

  const documentTranslateY = documentSlide.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const progressBarWidth = progressWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const dotScale1 = dot1.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });
  const dotScale2 = dot2.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });
  const dotScale3 = dot3.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  return (
    <View style={styles.container}>
      {/* Background gradient effect */}
      <View style={styles.backgroundGradient} />
      
      {/* Flying lines effect */}
      <View style={styles.linesContainer}>
        {lines.map((line, index) => (
          <Animated.View
            key={`line-${index}`}
            style={[
              styles.line,
              {
                top: 150 + index * 60,
                opacity: line.opacity,
                transform: [{ translateX: line.translateX }],
              },
            ]}
          />
        ))}
      </View>

      {/* Sparkles */}
      <View style={styles.sparklesContainer}>
        {sparkles.map((sparkle, index) => {
          const positions = [
            { top: 120, left: 60 },
            { top: 180, right: 80 },
            { top: 250, left: 40 },
            { top: 320, right: 60 },
            { top: 380, left: 70 },
            { top: 450, right: 90 },
          ];
          
          const rotation = sparkle.rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
          });

          return (
            <Animated.View
              key={`sparkle-${index}`}
              style={[
                styles.sparkle,
                positions[index],
                {
                  opacity: sparkle.opacity,
                  transform: [
                    { scale: sparkle.scale },
                    { rotate: rotation },
                  ],
                },
              ]}
            >
              <View style={styles.sparkleVertical} />
              <View style={styles.sparkleHorizontal} />
            </Animated.View>
          );
        })}
      </View>

      {/* Main content */}
      <View style={styles.contentContainer}>
        {/* Document icon with animation */}
        <Animated.View
          style={[
            styles.documentContainer,
            {
              opacity: documentOpacity,
              transform: [{ translateY: documentTranslateY }],
            },
          ]}
        >
          <View style={styles.document}>
            <View style={styles.documentCorner} />
            <View style={styles.documentLine1} />
            <View style={styles.documentLine2} />
            <View style={styles.documentLine3} />
          </View>
        </Animated.View>

        {/* Title */}
        <Text style={styles.title}>Creating Your CV</Text>
        
        {/* Typing indicator */}
        <View style={styles.typingContainer}>
          <Animated.View
            style={[
              styles.typingDot,
              { transform: [{ scale: dotScale1 }] },
            ]}
          />
          <Animated.View
            style={[
              styles.typingDot,
              { transform: [{ scale: dotScale2 }] },
            ]}
          />
          <Animated.View
            style={[
              styles.typingDot,
              { transform: [{ scale: dotScale3 }] },
            ]}
          />
        </View>

        {/* Status text */}
        <Text style={styles.statusText}>
          Formatting your experience and skills...
        </Text>

        {/* Progress bar */}
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              { width: progressBarWidth },
            ]}
          />
        </View>

        {/* Bottom message */}
        <Text style={styles.bottomText}>
          This will only take a moment
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    backgroundColor: '#F2FCFD',
    opacity: 0.5,
  },
  linesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  line: {
    position: 'absolute',
    left: 0,
    width: 120,
    height: 2,
    backgroundColor: '#01D3F8',
  },
  sparklesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  sparkle: {
    position: 'absolute',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sparkleVertical: {
    position: 'absolute',
    width: 2,
    height: 16,
    backgroundColor: '#01D3F8',
  },
  sparkleHorizontal: {
    position: 'absolute',
    width: 16,
    height: 2,
    backgroundColor: '#01D3F8',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  documentContainer: {
    marginBottom: 30,
  },
  document: {
    width: 100,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#01D3F8',
    padding: 12,
    shadowColor: '#01D3F8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  documentCorner: {
    position: 'absolute',
    top: -3,
    right: -3,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderTopColor: '#01D3F8',
  },
  documentLine1: {
    width: '80%',
    height: 4,
    backgroundColor: '#E6F9FD',
    borderRadius: 2,
    marginBottom: 8,
  },
  documentLine2: {
    width: '60%',
    height: 4,
    backgroundColor: '#E6F9FD',
    borderRadius: 2,
    marginBottom: 8,
  },
  documentLine3: {
    width: '70%',
    height: 4,
    backgroundColor: '#E6F9FD',
    borderRadius: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  typingContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  typingDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#01D3F8',
  },
  statusText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  progressBarContainer: {
    width: 280,
    height: 6,
    backgroundColor: '#E6F9FD',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#01D3F8',
    borderRadius: 3,
  },
  bottomText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '400',
  },
});

export default GeneratingLoader;;