import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

function hourWithAMPM(dateInput) {
  const d = new Date(dateInput)
  const ampm = d.getHours() >= 12 ? 'PM' : 'AM'
  const hours = d.getHours() >= 12 ? d.getHours() - 12 : d.getHours()
  return hours + ':' + d.getMinutes() + ' ' + ampm
}

const RepositoryItem = (props) => {
  const {
    item: { name, updatedAt, description, forkCount },
  } = props

  const languageName = ''
  const date = hourWithAMPM(updatedAt)
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.repoName} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.timeSection}>
          <Text style={styles.timeText}>{date}</Text>
        </View>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.descriptionText} numberOfLines={1}>
          {description || 'No description'}
        </Text>
        <View style={styles.forkWrapper}>
          <Text style={styles.forkCount} numberOfLines={1}>
            {forkCount}
          </Text>
        </View>
      </View>
      <View style={styles.footerSection}>
        <Text style={styles.languageText}>{languageName}</Text>
      </View>
      <View style={styles.separationLine} />
    </View>
  )
}

export default RepositoryItem
