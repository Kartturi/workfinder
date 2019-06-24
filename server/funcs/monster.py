import requests
from bs4 import BeautifulSoup
import random


def monsterReq(work, area=""):
    openingURL = ""
    monsterUrl = "https://www.monster.fi/tyopaikat/haku/?q={}&where={}&cy=fi".format(
        work, area)
    # make request to duunitori
    res = requests.get(monsterUrl)
    try:
        res.raise_for_status()
    except Exception as exc:
        print('There was a problem: %s' % (exc))

    soup = BeautifulSoup(res.text, 'html.parser')
    soup.prettify()
    # find all job openings

    openings = soup.find_all("section", class_="card-content")

    foundedOpenings = []

    noMatch = " ".join(soup.find_all(
        "h1", class_="pivot")[0].get_text().split())

    if noMatch == "Hakuehtojasi vastaavia työpaikkailmoituksia ei löytynyt":
        return foundedOpenings
    try:
        for job in openings:
            title = job.find_all("h2")

            if(len(title) == 1):
                # print(job.select("div .location a")[0])
                jobDict = {
                    "host": "monsteri",
                    "title": " ".join(job.select("h2")[0].select("a")[0].get_text().split()),
                    "location": area,
                    "link": job.select(".title")[0].find_all('a', href=True)[0]["href"],

                    "desc": "{} | {}".format(job.select(".company")[0].select("a")[0].get_text(), job.select(".meta")[0].select("time")[0].get_text()),
                    "id": random.random() * 10000
                }
                foundedOpenings.append(jobDict)
    except:
        return foundedOpenings
    return foundedOpenings


print(monsterReq("siivooja", "turku"))
