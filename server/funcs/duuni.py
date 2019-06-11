import requests
from bs4 import BeautifulSoup


def duuniReq(work, area=""):
    openingURL = "https://duunitori.fi"
    duunitoriURL = "https://duunitori.fi/tyopaikat/?haku={}&alue={}".format(
        work, area)
    # make request to duunitori
    res = requests.get(duunitoriURL)
    try:
        res.raise_for_status()
    except Exception as exc:
        print('There was a problem: %s' % (exc))

    soup = BeautifulSoup(res.text, 'html.parser')
    soup.prettify()
    # find all job openings

    openings = soup.find_all("div", class_="job-box")

    foundedOpenings = []

    for job in openings:
        title = job.select(".job-box__title")
        if(len(title) == 1):
            jobDict = {
                "title": job.select(".job-box__title")[0].get_text(),
                "location": " ".join(job.select(".job-box__job-location")[0].get_text().split()),
                "link": openingURL + job.find_all('a', href=True)[0]["href"],
                "posted": job.select(".job-box__job-posted")[0].get_text()
            }
            foundedOpenings.append(jobDict)
    return foundedOpenings

