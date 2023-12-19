Search.setIndex({"docnames": ["calculus/contour", "calculus/integration", "calculus/optimization", "differential-equations/graphical", "differential-equations/numerical", "differential-equations/odeint", "differential-equations/systems", "getting-started/jupyter", "getting-started/mathematics", "getting-started/matrices", "getting-started/vectorization", "index", "linear-algebra/eigenvalues", "linear-algebra/systems", "linear-algebra/transformations"], "filenames": ["calculus/contour.ipynb", "calculus/integration.ipynb", "calculus/optimization.ipynb", "differential-equations/graphical.ipynb", "differential-equations/numerical.ipynb", "differential-equations/odeint.ipynb", "differential-equations/systems.ipynb", "getting-started/jupyter.ipynb", "getting-started/mathematics.ipynb", "getting-started/matrices.ipynb", "getting-started/vectorization.ipynb", "index.md", "linear-algebra/eigenvalues.ipynb", "linear-algebra/systems.ipynb", "linear-algebra/transformations.ipynb"], "titles": ["Contour Plots", "Numerical Integration", "Optimization", "Slope Fields", "Euler\u2019s Method", "Numerical Solutions with odeint", "Systems of Differential Equations", "Python and Jupyter", "Elementary Mathematics", "Working with Matrices", "Vectorization and Plotting", "Python and Jupyter for UBC Mathematics", "Eigenvalues and Eigenvectors", "Systems of Linear Equations", "Linear Transformations"], "terms": {"under": [1, 4, 5, 6, 11, 12], "construct": [1, 4, 5, 6, 12], "syzygi": [7, 11], "depart": 11, "univers": 11, "british": 11, "columbia": 11, "our": [1, 2, 3, 9, 10, 11], "goal": 11, "get": [1, 2, 7, 11], "student": [7, 11], "instructor": 11, "up": [1, 11], "run": [7, 10, 11], "quickli": 11, "patrick": 11, "wall": 11, "an": [1, 2, 3, 8, 9, 10, 11, 14], "associ": 11, "professor": 11, "teach": 11, "undergradu": 11, "cours": 11, "differenti": [2, 3, 8, 11], "equat": [2, 7, 8, 11], "linear": [8, 11], "algebra": [2, 8, 11, 13], "optim": 11, "comput": [0, 3, 7, 8, 9, 10, 11, 14], "thi": [1, 2, 3, 9, 10, 11], "work": 11, "creativ": 11, "common": 11, "attribut": [2, 11], "noncommerci": 11, "sharealik": 11, "4": [0, 1, 3, 8, 9, 10, 11, 13, 14], "0": [0, 1, 2, 3, 8, 9, 10, 11, 13, 14], "intern": 11, "open": [7, 11], "sourc": 11, "gener": [10, 11], "purpos": 11, "program": [8, 11], "languag": 11, "web": 11, "applic": 11, "creat": [0, 1, 2, 3, 7, 8, 9, 10, 11, 13, 14], "docuemnt": [], "instanc": [10, 11], "jupyterhub": 11, "manag": [7, 11], "pacif": 11, "institut": 11, "scienc": 11, "syzyg": [], "host": [7, 11], "notebook": [7, 11], "all": [0, 1, 2, 7, 8, 10, 11, 13], "faculti": [7, 11], "staff": [7, 11], "ar": [0, 1, 2, 3, 8, 9, 10, 11, 13, 14], "import": [0, 1, 2, 3, 7, 8, 9, 10, 11, 13, 14], "part": [3, 11], "mission": [], "check": [8, 9, 10, 11, 13], "out": [0, 8, 9, 10, 11, 13], "more": [1, 3, 8, 9, 11, 13], "comprehens": 11, "introduct": 11, "document": [7, 11, 13], "numpi": [0, 1, 2, 3, 9, 10, 13, 14], "np": [0, 1, 2, 3, 8, 9, 13, 14], "scipi": [9, 14], "linalg": [13, 14], "la": [13, 14], "matplotlib": [0, 1, 2, 3, 13, 14], "pyplot": [0, 1, 2, 3, 10, 13, 14], "plt": [0, 1, 2, 3, 10, 13, 14], "A": [1, 2, 3, 7, 9, 10, 13, 14], "collect": 13, "begin": [0, 1, 2, 9, 10, 13, 14], "arrai": [0, 1, 2, 9, 10, 13, 14], "ccccccccc": 13, "a_": 13, "x_0": [0, 1, 10, 13, 14], "1": [0, 1, 3, 8, 9, 10, 13, 14], "x_1": [0, 1, 10, 13, 14], "cdot": [0, 1, 8, 10, 13, 14], "n": [0, 1, 3, 8, 9, 10, 13], "x_": [1, 13], "b_0": 13, "b_1": 13, "vdot": [0, 10, 13], "b_": 13, "end": [0, 1, 2, 9, 10, 13, 14], "where": [1, 2, 9, 10, 13, 14], "number": [0, 3, 9, 10, 13], "i": [0, 1, 3, 9, 13], "j": [0, 3, 9, 13], "b_i": 13, "known": 13, "coeffici": 13, "x_j": 13, "variabl": 13, "we": [0, 1, 2, 3, 7, 8, 9, 10, 13, 14], "can": [1, 2, 3, 8, 10, 13, 14], "write": [0, 7, 9, 13], "matrix": [0, 9, 13], "mathbf": [0, 1, 2, 9, 10, 13, 14], "x": [0, 1, 2, 8, 9, 10, 13, 14], "b": [0, 1, 2, 10, 13, 14], "bmatrix": [0, 1, 9, 10, 13, 14], "ddot": [0, 13], "hspace": [0, 13], "20mm": [0, 13], "combin": 13, "vector": [0, 1, 2, 3, 8, 9, 13, 14], "augment": 13, "There": [0, 9, 13], "three": 13, "type": 13, "add": [0, 1, 10, 13], "multipl": [8, 10, 13], "one": [1, 13], "anoth": 13, "multipli": [1, 10, 13], "scalar": [9, 10, 13], "switch": 13, "function": [0, 1, 2, 3, 13], "call": 13, "add_row": 13, "which": [2, 3, 7, 10, 13, 14], "take": [0, 8, 10, 13], "c": [0, 1, 10, 13, 14], "return": 13, "obtain": 13, "from": [0, 1, 2, 3, 8, 9, 10, 13], "ad": [10, 13], "time": [1, 7, 13], "def": 13, "astyp": 13, "float64": 13, "copi": [0, 3, 13], "input": 13, "2": [0, 1, 3, 8, 9, 10, 13, 14], "3": [0, 1, 3, 7, 8, 9, 10, 13, 14], "print": [0, 1, 2, 8, 9, 10, 13, 14], "a1": 13, "6": [0, 1, 2, 8, 9, 10, 13, 14], "8": [1, 2, 3, 9, 13], "scale_row": 13, "a2": 13, "33333333": 13, "switch_row": 13, "pivot": 13, "first": [1, 2, 3, 8, 13], "nonzero": 13, "entri": [9, 10, 13], "zero": [9, 13], "bottom": 13, "each": [0, 1, 3, 9, 10, 13], "right": [1, 2, 3, 9, 13], "abov": [0, 1, 2, 3, 8, 9, 10, 13, 14], "below": [1, 2, 3, 10, 13], "equal": [0, 1, 2, 10, 13, 14], "onli": 13, "its": 13, "column": [0, 9, 13, 14], "appli": [0, 1, 10, 13, 14], "transform": 13, "follow": [0, 1, 3, 10, 13], "m": [0, 1, 3, 13], "left": [1, 2, 7, 9, 13], "rrrr": [9, 13], "m1": 13, "5": [0, 1, 2, 3, 8, 9, 10, 13], "m2": 13, "success": 13, "now": [1, 13], "let": [0, 1, 2, 3, 8, 9, 10, 13, 14], "s": [0, 1, 2, 3, 8, 9, 10, 13, 14], "few": [10, 13], "step": [10, 13], "farther": 13, "m3": 13, "m4": 13, "66666667": 13, "m5": 13, "m6": 13, "m7": 13, "m8": 13, "In": [0, 1, 2, 3, 10, 13, 14], "fact": 13, "have": 13, "copmut": [], "10mm": 13, "The": [0, 1, 2, 3, 8, 9, 10, 13, 14], "solv": [2, 3, 8, 13], "uniqu": [3, 13], "nonsingular": 13, "see": [0, 1, 2, 3, 7, 9, 13], "inform": [3, 13], "For": [0, 1, 2, 3, 8, 9, 10, 13], "exampl": [1, 8, 9, 13], "previou": [1, 13], "section": 13, "mathemat": [9, 10, 13], "python": [3, 8, 9, 10, 13], "about": [0, 3, 8, 9, 10, 13, 14], "reduc": 13, "cmpute": 13, "basic": 0, "z": [0, 1], "f": [0, 1, 2, 3, 8, 10, 14], "y": [0, 1, 2, 3, 8, 9, 10, 14], "over": [0, 1, 10], "interv": [0, 1, 3, 10], "leq": [0, 1, 3], "d": 0, "valu": [0, 1, 2, 3, 8, 9, 10], "us": [0, 1, 2, 3, 8, 9, 10, 14], "matric": [0, 8], "result": [0, 1, 2, 3, 9, 10], "specifi": 0, "line": [0, 3, 10, 14], "color": [0, 1, 2, 10], "bar": 0, "other": [0, 1, 10, 14], "figur": [0, 1, 2, 3, 14], "properti": [0, 3], "xy": [0, 1, 14], "2y": [0, 2], "linspac": [0, 1, 2, 3], "51": 0, "level": [0, 2], "grid": [0, 1, 2, 3, 14], "true": [0, 1, 2, 3, 14], "colorbar": [0, 2], "show": [0, 1, 2, 3, 10, 14], "sever": 0, "option": 0, "fill": [0, 1], "contourf": [0, 2], "choos": [0, 1, 2, 3, 10], "differ": [0, 1, 3], "colormap": 0, "cmap": [0, 2], "set": [0, 10], "oppos": 0, "20": [0, 1, 2, 10], "jet": 0, "x_m": 0, "y_0": [0, 3, 10, 14], "y_1": [0, 10, 14], "y_n": [0, 10, 14], "note": [0, 1, 8, 9, 10, 14], "row": [0, 9, 14], "point": [0, 1, 3, 9, 10, 14], "think": [0, 10], "how": [0, 3, 10], "x_i": 0, "y_j": [0, 3], "z_": 0, "ji": 0, "connect": [0, 10], "adjac": 0, "surfac": 0, "plane": [0, 3, 14], "repres": [0, 2, 9], "order": [0, 3], "notat": [0, 10], "therefor": [0, 1, 2, 3, 8, 14], "functoin": [], "need": [0, 1, 3, 8, 10], "do": [0, 1, 2, 3, 8, 10], "past": [0, 3], "modifi": [0, 3], "code": [0, 1, 2, 3, 7, 10], "new": [0, 7, 9], "co": [0, 2, 3, 8, 10, 14], "pi": [0, 10, 14], "sin": [0, 2, 3, 8, 10, 14], "101": [0, 10], "magma": 0, "3y": 0, "e": [0, 2, 10], "exp": [0, 2, 8, 10], "purd": 0, "respect": [0, 14], "kind": 8, "problem": 8, "calculu": 8, "beyond": 8, "look": [3, 8, 10], "some": [3, 8, 10], "foundat": 8, "concept": [8, 10], "relav": 8, "branch": 8, "http": [], "patrickwal": [], "github": [], "io": [], "mathematicalpython": [], "essenti": 8, "packag": [8, 10], "numer": [2, 8, 10], "It": [7, 8, 10], "includ": [8, 14], "object": [2, 8], "algeabra": 8, "keyword": [8, 10], "alia": [8, 10], "perform": [8, 10], "usual": [2, 8, 10], "arithmet": 8, "oper": [8, 9], "syntax": [8, 9, 10], "addit": [8, 10], "subtract": [8, 9, 10], "divis": [8, 10], "exponenti": [8, 10], "recal": 8, "taylor": 8, "seri": 8, "sum_": [1, 8], "infti": [1, 3, 8], "frac": [1, 2, 3, 8, 10], "term": [3, 8], "approxim": [1, 2, 3, 8], "sqrt": [1, 2, 8, 10], "approx": [1, 8], "6065104166666666": 8, "group": 8, "togeth": [1, 8], "parenthes": 8, "enter": [8, 9, 10], "141592653589793": 8, "718281828459045": 8, "also": [3, 8, 10], "should": [3, 7, 8], "when": [1, 7, 8, 10], "instead": [8, 9], "just": [8, 10], "like": [3, 8, 10], "familiar": 8, "easili": 8, "manipul": 8, "assign": 8, "2x": [2, 8], "displai": 8, "7": [2, 3, 8, 9, 10], "dy": [1, 3, 8], "standard": [8, 14], "avail": 8, "tan": 8, "arctan": [3, 8, 10], "ln": [8, 10], "log": 8, "log_": 8, "10": [1, 2, 3, 8, 10], "log10": 8, "7071067811865476": 8, "7071067811865475": 8, "6931471805599453": 8, "7853981633974483": 8, "3010299956639812": 8, "trigonometr": [], "defin": [1, 2, 3, 9, 10, 14], "radian": 14, "natur": [], "logarithm": [], "base": 1, "lambda": [1, 2, 3, 8], "simplest": 9, "wai": 9, "squar": 9, "bracket": 9, "separ": 9, "space": 10, "comma": 9, "semicolon": [], "9": [2, 9, 10], "ones": 9, "ey": 9, "diag": [9, 14], "ident": [9, 10], "size": [9, 10], "diagon": 9, "upper": 9, "lower": 9, "two": 9, "put": [1, 9], "them": [2, 9], "c1": [1, 9], "c2": [1, 9], "r1": 9, "r2": 9, "block": 9, "phantom": 9, "rrrrr": 9, "access": [2, 9], "consid": [1, 2, 9], "colon": 9, "select": [1, 9], "entir": [1, 9], "fundament": 10, "idea": 10, "simpl": [2, 10], "veri": [2, 10], "power": 10, "ani": [1, 3, 10, 14], "x_2": [], "x_3": [], "x_n": [1, 10, 14], "elementwis": 10, "simultan": 10, "simplifi": 10, "matlab": [], "learn": [], "wikipedia": [], "discuss": [], "To": [3, 10], "graph": [2, 10], "finit": 10, "increas": [1, 10], "correspond": [1, 10, 14], "dot": [1, 10], "pair": 10, "consecut": 10, "straight": 10, "make": [1, 3, 10], "observ": [2, 3, 10], "larger": [3, 10], "produc": 10, "smoother": 10, "requir": [1, 10], "memori": [1, 10], "store": [2, 10], "own": [7, 10], "judgement": 10, "larg": [3, 10], "enough": [3, 10], "so": [1, 2, 3, 9, 10], "smooth": 10, "small": [1, 3, 10], "amount": 10, "too": [3, 10], "big": 10, "command": [1, 10, 14], "script": 10, "smoothli": [1, 10], "ineffici": 10, "manual": 10, "did": 10, "style": [1, 10], "titl": [1, 10], "legend": 10, "etc": 10, "601": [], "01": 10, "closer": 10, "increment": [], "2000": [], "4000": [], "6000": [], "8000": [], "0000": [], "word": [1, 10, 14], "x_k": [1, 10, 14], "k": [1, 2, 14], "05": [], "00": 10, "11": 1, "50": [2, 10], "95": [], "21": [3, 10], "length": [1, 3], "0500": [], "5000": [], "9500": [], "allow": [], "user": [], "between": [1, 3, 10], "sometim": 10, "help": [], "total": [], "evenli": 10, "1250": [], "2500": [], "3750": [], "6250": [], "7500": [], "8750": [], "given": [1, 2, 10, 14], "x1": [], "x2": [], "mean": [1, 10], "y1": 10, "y2": 10, "7071": [], "clearli": 10, "100": [1, 2, 10], "alreadi": [], "xe": [2, 10], "25": [3, 10], "1947": [], "3033": [], "3543": [], "3679": [], "y_k": [1, 10, 14], "same": [1, 2, 10], "verbos": 10, "75": [3, 10], "displaystyl": [2, 3, 10], "200": 10, "500": 10, "without": 10, "predict": 10, "solut": [1, 2], "389400391535702": [], "367879441171442": [], "list": [9, 14], "r0": 9, "rn": 9, "row_stack": [9, 14], "column_stack": 9, "b1": 9, "b2": 9, "alwai": [2, 3, 9], "start": [1, 7, 9], "whenev": 10, "main": 10, "lot": 10, "subpackag": 10, "primarili": 10, "2d": 10, "th": [], "125": 10, "375": 10, "625": 10, "875": 10, "h": 10, "00000000e": 10, "07106781e": 10, "22464680e": 10, "16": 10, "1947002": 10, "30326533": 10, "35427491": 10, "36787944": 10, "pyton": 10, "cc": [], "BY": [], "nc": [], "sa": [], "math": 7, "latex": 7, "explanatori": 7, "text": 7, "markdown": 7, "noteobok": [], "ha": [], "file": 7, "extens": [], "ipynb": [], "json": [], "format": 1, "raw": [], "form": 1, "ubc": 7, "login": 7, "your": 7, "cwl": 7, "develop": 7, "environ": 7, "onc": 7, "you": 7, "interfac": 7, "click": 7, "ipykernel": 7, "launcher": 7, "window": 7, "folder": 7, "current": 7, "icon": 7, "top": 7, "upload": 7, "refresh": 7, "everi": 7, "launch": 7, "process": 7, "stop": 7, "button": 7, "view": 7, "close": 7, "cloud": 7, "shutdown": 7, "distribut": 7, "instal": 7, "machin": 7, "definit": 1, "int_a": 1, "dx": 1, "net": 1, "area": 1, "curv": [1, 2], "rectangl": 1, "particular": [1, 3], "integ": [1, 9], "delta": 1, "partit": 1, "subinterv": 1, "height": 1, "endpoint": 1, "r": [1, 2, 14], "l": [1, 3], "limit": 1, "lim_": [1, 3], "plot": [1, 2, 3, 14], "consist": 1, "rang": [1, 3], "c0": [1, 3], "alpha": [1, 3, 14], "outlin": 1, "mani": 1, "procedur": 1, "index": [1, 14], "exercis": 1, "int_0": 1, "know": [1, 3], "exact": 1, "compar": 1, "higher": 1, "give": [1, 3], "better": 1, "later": 1, "verifi": 1, "dex": 1, "96": 1, "84": 1, "64": 1, "36": 1, "5599999999999998": 1, "cell": [1, 3], "64125": 1, "y_": 1, "substitut": [1, 2], "rewrit": 1, "exactli": 1, "6912499999999999": 1, "approach": 1, "averag": 1, "t": [1, 3], "5997333440000003": 1, "int_": 1, "converg": 1, "region": [1, 2], "bound": 1, "iint_r": 1, "kl": 1, "what": [1, 2], "doe": [1, 3], "mathbb": [1, 2, 14], "g": [1, 2], "volum": 1, "rectangular": 1, "prism": 1, "maxf": 1, "maximum": [1, 2], "transpar": 1, "40": [1, 2], "lw": 1, "lk": 1, "save": 1, "i_k": 1, "1000": 1, "fk": 1, "7345113601794344": 1, "_0": [1, 2], "15": 1, "7333333333333333": 1, "sinc": [1, 3, 9], "both": 1, "directoin": 1, "choic": 1, "fk1": 1, "fk2": 1, "fk3": 1, "fk4": 1, "root": 2, "nabla": 2, "local": 2, "minimum": 2, "occur": 2, "strategi": 2, "system": 2, "10x": 2, "5x": 2, "4y": 2, "contour": 2, "origin": [2, 14], "meshgrid": 2, "rdbu": 2, "partial": 2, "deriv": 2, "align": 2, "f_x": 2, "20xy": 2, "4x": 2, "f_y": 2, "8y": 2, "setup": 2, "fx": [2, 14], "fy": 2, "linestyl": 2, "dash": 2, "intersect": 2, "estim": 2, "coordin": [2, 14], "inspect": [2, 3], "saddlepoint": 2, "nonlinear": 2, "difficult": 2, "imposs": 2, "explicitli": 2, "assum": 2, "ne": 2, "second": 2, "8x": 2, "But": [2, 10], "polynomi": 2, "degre": 2, "formula": 2, "method": 2, "newton": 2, "w": 2, "initi": [2, 3], "guess": 2, "grad": 2, "output": 2, "result1": 2, "point1": 2, "6442243": 2, "89838443": 2, "repeat": 2, "result2": 2, "point2": 2, "result3": 2, "point3": 2, "85665687": 2, "6467722": 2, "result4": 2, "point4": 2, "ms": 2, "along": 2, "le": 2, "subject": 2, "gradient": 2, "x_p": 2, "y_p": 2, "gx": 2, "gy": 2, "xp": 2, "yp": 2, "quiver": 2, "axi": [2, 3, 14], "406494877410645": 2, "complet": [2, 3], "find": 2, "constraint": 2, "trial": 2, "error": [2, 10], "28479999999999983": 2, "ca": 7, "decim": 9, "ensur": 9, "float": 9, "good": 9, "pratcic": 9, "most": [3, 9], "mcomput": [], "treat": [], "ie": 9, "matheamt": 9, "1e": 10, "scientif": 10, "round": 10, "interpret": 10, "Then": 10, "could": 10, "assymmetr": [], "stack": 14, "defind": [], "vertic": 14, "direct": [3, 14], "written": 14, "basi": 14, "ax": 14, "product": 14, "r_": 14, "theta": [3, 14], "clockwis": 14, "rx": 14, "c_": 14, "cx": 14, "s_u": 14, "u": 14, "factor": 14, "sx": 14, "tx": [], "asymmetr": 14, "onto": 14, "angl": 14, "p_": 14, "p": 14, "px": 14, "refelct": 14, "through": [3, 14], "f_": 14, "cannot": 3, "analyt": 3, "elementari": 3, "graphic": [], "describ": 3, "qualit": 3, "soluion": [], "pass": 3, "t0": 3, "tf": 3, "y0": 3, "yf": 3, "min": 3, "dt": 3, "visual": 3, "studi": 3, "slpe": [], "short": 3, "bunch": 3, "ty": 3, "behaviour": 3, "m_": 3, "ij": 3, "t_i": 3, "accomplish": 3, "task": 3, "had": 3, "side": 3, "t_0": 3, "t_f": 3, "y_f": 3, "clear": 3, "don": 3, "overlap": 3, "equaiton": 3, "roughli": 3, "quantit": 3, "paramet": 3, "focu": 3, "finer": 3, "seem": 3, "interest": 3, "mai": 3, "conclud": 3, "exist": 3, "satisfi": 3, "unclear": 3, "hand": 3, "depend": 3, "constant": 3, "stabl": 3, "equilibirum": 3, "unstabl": 3, "equilibrium": 3, "31": 3, "suggest": 3, "analysi": 3, "prove": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"contour": 0, "plot": [0, 10], "numer": [1, 5], "integr": 1, "slope": 3, "field": 3, "euler": 4, "s": 4, "method": 4, "solut": [3, 5, 13], "odeint": 5, "system": [6, 13], "differenti": 6, "equat": [3, 6, 13], "elementari": [8, 13], "mathemat": [8, 11], "work": 9, "matric": 9, "jupyterlab": 7, "syzygi": [], "vector": 10, "python": [7, 11], "jupyt": [7, 11], "ubc": 11, "about": 11, "author": 11, "licens": 11, "eigenvalu": 12, "eigenvector": 12, "geometri": [], "linear": [13, 14], "transform": 14, "terminolog": 13, "row": 13, "oper": [10, 13], "reduc": [], "echelon": 13, "form": 13, "comput": [1, 2, 13], "optim": 2, "scipi": [2, 13], "procedur": [0, 10], "what": [0, 3], "meshgrid": 0, "exampl": [0, 2, 3, 10], "numpi": 8, "number": 8, "constant": 8, "pi": 8, "e": 8, "variabl": 8, "function": [8, 9, 10], "custom": 8, "manual": 9, "construct": 9, "concaten": [], "addit": 9, "multipl": [9, 14], "index": 9, "basic": 10, "h": [], "b": [], "linspac": 10, "arithmet": 10, "more": 10, "exercis": [2, 10], "stack": 9, "matplotlib": 10, "np": 10, "notebook": [], "shutdown": [], "kernel": 7, "anaconda": 7, "visual": 1, "riemann": 1, "sum": 1, "trapezoid": 1, "rule": 1, "doubl": 1, "doulb": [], "tripl": 1, "classifi": 2, "critic": 2, "point": 2, "graphic": 2, "1": 2, "2": 2, "3": 2, "constrain": 2, "4": 2, "rotat": 14, "matrix": 14, "scale": 14, "shear": 14, "composit": [], "project": 14, "reflect": 14, "deriv": [], "implement": 3, "autonom": 3, "converg": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})