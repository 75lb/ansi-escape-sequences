import ansi from 'ansi-escape-sequences'
import { setTimeout as sleep } from 'node:timers/promises'

/* One line view. Updates the line twice with a 1s gap in between. */

console.log('Pending')
await sleep(1000)

process.stdout.write(ansi.cursor.up(1) + ansi.erase.inLine(2))
console.log('In progress')
await sleep(1000)

process.stdout.write(ansi.cursor.up(1) + ansi.erase.inLine(2))
console.log('Complete')

