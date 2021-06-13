import csv
import json
import pandas as pd
from tqdm import tqdm
import pickle
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt


def dumpPickle(df, name):
    picklefile = open(name, 'wb')
    pickle.dump(df, picklefile)
    picklefile.close()
    print("Pickle dumped and picklefile closed.")


def loadPickle(name):
    picklefile = open(name, 'rb')
    df = pickle.load(picklefile)
    return df


sheetList = [
    {'name': 'Lukas Frösslund', 'points': 2054910135},
    {'name': 'Jennifer Johansson', 'points': 367674404},
    {'name': 'Albin Thurén', 'points': 351386624},
    {'name': 'Erik Gustafsson', 'points': 1356020415},
    {'name': 'Cajsa Eriksson', 'points': 1763715858},
    {'name': 'Patric Hjorth', 'points': 956825562},
    {'name': 'Jacob Hjorth', 'points': 1623203222},
    {'name': 'Andreas Eriksson', 'points': 1249302655},
    {'name': 'Anton Wårdell', 'points': 396050143},
    {'name': 'David Berg', 'points': 1688944588},
    {'name': 'Ted Karlsson', 'points': 861631264},
    {'name': 'Alexander Jarlenäs', 'points': 1095748200},
    {'name': 'Hedvig Fahlstedt', 'points': 1876713390},
    {'name': 'Adam de Lancey', 'points': 942871444},
    {'name': 'Tor Simmons', 'points': 135785318},
    {'name': 'Noel Milleskog', 'points': 773274216},
    {'name': 'Hanna Milleskog', 'points': 866646381},
    {'name': 'Rickard Brånemark', 'points': 315893603},
    {'name': 'William Laahanen', 'points': 1314708184},
    {'name': 'Adam Laahanen', 'points': 2141502958},
    {'name': 'Johannes Karlsson', 'points': 101737574},
    {'name': 'Filip Lidhammar', 'points': 1572752502},
    {'name': 'William Magnusson', 'points': 268517332},
    {'name': 'Hugo Arvidsson', 'points': 550474824},
    {'name': 'Robert Lidhammar', 'points': 1965949287},
    {'name': 'Viktor Hansson', 'points': 1062474688},
    {'name': 'Isabella Johannesson', 'points': 1631251563},
    {'name': 'Pontus Lundgren', 'points': 220966450},
    {'name': 'Oscar Andersson', 'points': 1670072045},
    {'name': 'Kenneth Runnman', 'points': 2108224413},
    {'name': 'Patricia Correia', 'points': 955752933},
    {'name': 'Amanda Nilsson', 'points': 46684960},
    {'name': 'Alicia Brånemark', 'points': 2022670665},
    {'name': 'Filip Mälberg', 'points': 279112572},
    {'name': 'Jonny Frösslund', 'points': 2103240923},
    {'name': 'Joel Fahlstedt', 'points': 98219501},
    {'name': 'Anna Brånemark', 'points': 42437357},
    {'name': 'Per Kivijärvi', 'points': 855220829},
    {'name': 'Valdemar Gezelius', 'points': 1651765570},
    {'name': 'Sebastian Brånemark', 'points': 696325482},
    {'name': 'Linnéa Amundson', 'points': 1950141069},
    {'name': 'Andreas Schill', 'points': 1576817809}
]


def downloadCompleteStatsDoc():
    dfStats = {}
    completeSpreadsheetIdx = "1yAKozFLtn03rTj9ByB0aulmebP0_U1TAsGz538zAY0w"
    for sheet in tqdm(sheetList):
        participant = sheet['name']
        sheet_idx = sheet['points']
        dfStats[sheet_idx] = {}
        dfStats[sheet_idx]['name'] = participant

        url = f"https://docs.google.com/spreadsheets/d/{completeSpreadsheetIdx}/export?format=csv&gid={sheet_idx}"
        curr_df = pd.read_csv(url)

        dfStats[sheet_idx]['winner'] = curr_df.iloc[2, 23]
        dfStats[sheet_idx]['topscorer'] = curr_df.iloc[3, 23]

        dfStats[sheet_idx]['matches'] = []
        match_idx = 2
        while match_idx <= 52:
            for i in range(6):
                dfStats[sheet_idx]['matches'].append([curr_df.iloc[match_idx, 3], curr_df.iloc[match_idx, 5], curr_df.iloc[match_idx, 6], str(
                    int(curr_df.iloc[match_idx, 8])), curr_df.iloc[match_idx, 9]])
                match_idx += 1
            match_idx += 3

        dfStats[sheet_idx]['roundofsixteen'] = []
        match_idx = 56
        while match_idx <= 63:
            dfStats[sheet_idx]['roundofsixteen'].append(
                curr_df.iloc[match_idx, 3])
            dfStats[sheet_idx]['roundofsixteen'].append(
                curr_df.iloc[match_idx, 5])
            match_idx += 1

        dfStats[sheet_idx]['quarterfinals'] = []
        match_idx = 67
        while match_idx <= 70:
            dfStats[sheet_idx]['quarterfinals'].append(
                curr_df.iloc[match_idx, 3])
            dfStats[sheet_idx]['quarterfinals'].append(
                curr_df.iloc[match_idx, 5])
            match_idx += 1

        dfStats[sheet_idx]['semifinals'] = []
        match_idx = 74
        while match_idx <= 75:
            dfStats[sheet_idx]['semifinals'].append(curr_df.iloc[match_idx, 3])
            dfStats[sheet_idx]['semifinals'].append(curr_df.iloc[match_idx, 5])
            match_idx += 1

        dfStats[sheet_idx]['final'] = []
        dfStats[sheet_idx]['final'].append(curr_df.iloc[79, 3])
        dfStats[sheet_idx]['final'].append(curr_df.iloc[79, 5])

    dumpPickle(dfStats, "allStatsTipsUpdated")


def whoHasResult(matchIdx, result):
    df = loadPickle("allStatsTipsUpdated")
    print(result)
    for key in df.keys():
        r = df[key]['matches'][matchIdx]
        res = r[2] + "-" + r[3]
        if res == result:
            print(df[key]['name'])


def getStatsFromMatch(matchIdx):
    df = loadPickle("allStatsTipsUpdated")
    scores = {}
    signs = {}
    for key in df.keys():
        r = df[key]['matches'][matchIdx]
        print(r[0])
        print(r[1])
        res = r[2] + "-" + r[3]
        s = r[4]
        if res in scores:
            scores[res] += 1
        else:
            scores[res] = 1
        if s in signs:
            signs[s] += 1
        else:
            signs[s] = 1

    print(scores)
    print(signs)

    scores_sorted = {k: v for k, v in sorted(
        scores.items(), key=lambda item: item[1], reverse=True)}

    print(scores_sorted)

    x = np.array(list(scores_sorted.keys()))
    y = np.array(list(scores_sorted.values()))
    dims = (20, 13)
    sns.set(font_scale=3)
    fig, ax = plt.subplots(figsize=dims)
    barp = sns.barplot(x=x, y=y, palette="mako", ax=ax)
    fig = barp.get_figure()
    ax.set_yticks(np.arange(0, max(list(scores_sorted.values()))+2))
    fig.savefig(dpi=300, fname=f"scores_plot_{matchIdx}_2")

    print("Scores plot saved.")

    x = np.array(list(signs.keys()))
    y = np.array(list(signs.values()))
    dims = (15, 10)
    fig, ax = plt.subplots(figsize=dims)
    sns.set(font_scale=3)
    barp = sns.barplot(x=x, y=y, palette="viridis",
                       ax=ax, order=['1', 'X', '2'])
    ax.set_yticks(np.arange(0, max(list(signs.values()))+5, 5))
    fig = barp.get_figure()
    fig.savefig(dpi=300, fname=f"signs_plot_{matchIdx}_2")

    print("Signs plot saved.")


def updateTopScorers():
    with open('scores.csv') as csvfile:
        rows = csv.reader(csvfile)
        res = list(zip(*rows))
        res = res[-2:]

    names = res[0][3:45]
    points = res[1][3:45]

    scoresDict = {"scores": []}
    scoresZip = zip(names, points)
    for item in scoresZip:
        scoresDict["scores"].append({"name": item[0], "points": int(item[1])})

    with open('scores.json', 'w') as f:
        json.dump(scoresDict, f, ensure_ascii=False)

    print("Updates scores saved.")


# getStatsFromMatch(13)
# downloadCompleteStatsDoc()
updateTopScorers()
#whoHasResult(13, '2-2')
