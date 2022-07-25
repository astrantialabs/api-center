from excel import Excel
from utility import Utility


class Translate:
    def route():
        workbook = Excel("./excel/route.xlsx")

        routeData = workbook.get_value_multiple_2d("E5", "G17")

        routeList = []
        for routeIndex, route in enumerate(routeData):
            routeObject = {
                "id": routeIndex + 1,
                "route": route[0],
                "parameter": route[1],
                "description": route[2],
            }

            routeList.append(routeObject)

        Utility.writeJSON("./json/route.json", routeList)


Translate.route()
