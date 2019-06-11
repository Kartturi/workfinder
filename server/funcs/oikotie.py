from bs4 import BeautifulSoup

import sys
import requests


oikotieAreas = {
    "Ahvenanmaa": 2,
    "Etelä-Karjala": 4,
    "Etelä-Pohjanmaa": 5,
    "Etelä-Savo": 6,
    "Kainuu": 9,
    "Kanta-Häme": 7,
    "Keski-Pohjanmaa": 10,
    "Keski-Suomi": 11,
    "Kymenlaakso": 12,
    "Lappi": 13,
    "Pirkanmaa": 14,
    "Pohjanmaa": 15,
    "Pohjois-Karjala": 16,
    "Pohjois-Pohjanmaa": 17,
    "Pohjois-Savo": 18,
    "Päijät-Häme": 19,
    "Satakunta": 20,
    "Uusimaa": 1,
    "Varsinais-Suomi": 3,
    "All": True

}

def oikotieReq(work, area="Kaikki"):

    # oikotie doesnt has city search parameter so we change city to its respective state area
    state = findStateOfCity(area)
    convertedAreaCode = oikotieAreas.get(state)

    oikotieUrl = ""
    if convertedAreaCode == True:
        oikotieUrl = f"https://tyopaikat.oikotie.fi/haku?jq={work}&sort_by=score"

    else:
        oikotieUrl = f"https://tyopaikat.oikotie.fi/haku?sijainti[{convertedAreaCode}]={convertedAreaCode}&jq={work}&sort_by=score&page=0"

    # make request to duunitori
    res = requests.get(oikotieUrl)
    try:
        res.raise_for_status()
    except Exception as exc:
        print('There was a problem: %s' % (exc))

    soup = BeautifulSoup(res.text, 'html.parser')
    soup.prettify()

    # check if matches
    results = soup.find_all("span", class_="sortbox-results-counter")
    if int(results[0].get_text()) == 0:
        return "results not found"
    joblist = soup.find_all("li", class_="joblist-item")

    joblistList = []

    for job in joblist:
        # get title, url, description from html and put it to jobdict and to joblist List
        jobDict = {}

        link = job.find("a").get("href")
        jobDict["link"] = link

        title = job.select(".job-title")[0].get_text()
        jobDict["title"] = title

        metadata = job.select(".metadata")[0].get_text()
        jobDict["desc"] = " ".join(metadata.split())

        location = job.select(".locations")[0].get_text()
        jobDict["location"] = " ".join(location.split())

        joblistList.append(jobDict)

    return joblistList


def findStateOfCity(cityParam):

    res = requests.get(
        "https://fi.wikipedia.org/wiki/Luettelo_Suomen_kaupungeista")
    try:
        res.raise_for_status()
    except Exception as exc:
        print('There was a problem: %s' % (exc))
    soup = BeautifulSoup(res.text, "html.parser")
    soup.prettify()
    citiesArr = soup.find_all("table")[0].find_all("tr")

    # here we check if there is empty arrays to avoid some python index bullshit error
    filterOutEmptyArrs = list(
        filter(lambda city: len(city.select("td a")) > 0,  citiesArr))

    result = "All"
    for item in filterOutEmptyArrs:
        if item.select("td a")[0].get_text().lower() == cityParam.lower():
            result = item.select("td a")[1].get_text()

    
    return result


