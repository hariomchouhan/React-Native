import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import TrackPlayer, { State, usePlaybackState } from "react-native-track-player";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
    const playBackState = usePlaybackState();

    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    // previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async (playBack: State) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex();

        if (currentTrack !== null) {
            if (playBack === State.Paused || playBack === State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    // Ensure playBackState is a valid State, otherwise default to State.None
    const currentState = typeof playBackState === 'object' && 'state' in playBackState
        ? playBackState.state || State.None
        : playBackState;

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={() => togglePlayback(currentState)}>
                <Icon
                    style={styles.icon}
                    name={currentState === State.Playing ? "pause" : "play-arrow"}
                    size={75}
                />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});

export default ControlCenter;