import { Rating as RatingScore } from 'react-native-ratings';
import { StyleSheet, View } from 'react-native';

interface Props {
    rating: number
}

function Rating({ rating }: Props) {
    return (
        <View style={styles.container}>
            <RatingScore
                showRating
                startingValue={rating}
                readonly
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
        padding: 15,
    }
})

export default Rating
