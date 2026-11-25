# The Meeting That Should Have Been an Email

[![make.fun](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/algifarri/makefun-u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/algifarri/makefun-u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

Entry for the [make.fun bounty "The Meeting That Should Have Been an Email"](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9): a program that writes one line, at most 200 characters, that makes a meeting-that-should-have-been-an-email funny.

## The entry

> Nine people, forty-five minutes, zero decisions — the meeting was an email with extra steps and worse lighting.

## How it works

`main.ts` (Node 22, standard library only) writes that one fixed line to `/output/entry.txt` — no trailing newline, so the judge reads exactly the bytes of the joke. The string never changes, so both grader runs produce identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
