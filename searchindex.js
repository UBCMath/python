Search.setIndex({"docnames": ["calculus/contour", "calculus/integration", "calculus/optimization", "differential-equations/graphical", "differential-equations/numerical", "differential-equations/odeint", "differential-equations/systems", "getting-started/jupyter", "getting-started/mathematics", "getting-started/matrices", "getting-started/vectorization", "index", "linear-algebra/eigenvalues", "linear-algebra/geometry", "linear-algebra/systems", "linear-algebra/transformations"], "filenames": ["calculus/contour.ipynb", "calculus/integration.ipynb", "calculus/optimization.ipynb", "differential-equations/graphical.ipynb", "differential-equations/numerical.ipynb", "differential-equations/odeint.ipynb", "differential-equations/systems.ipynb", "getting-started/jupyter.ipynb", "getting-started/mathematics.ipynb", "getting-started/matrices.ipynb", "getting-started/vectorization.ipynb", "index.md", "linear-algebra/eigenvalues.ipynb", "linear-algebra/geometry.ipynb", "linear-algebra/systems.ipynb", "linear-algebra/transformations.ipynb"], "titles": ["Contour Plots", "Numerical Integration", "Optimization", "Slope Fields", "Euler\u2019s Method", "Numerical Solutions with odeint", "Systems of Differential Equations", "JupyterLab", "Elementary Mathematics", "Working with Matrices", "Vectorization and Plotting", "Python and Jupyter for UBC Mathematics", "Eigenvalues and Eigenvectors", "Vector Geometry", "Systems of Linear Equations", "Linear Transformations"], "terms": {"under": [1, 2, 3, 4, 5, 6, 11, 12, 13, 15], "construct": [1, 2, 3, 4, 5, 6, 12, 13, 15], "syzygi": 11, "depart": 11, "univers": 11, "british": 11, "columbia": 11, "our": [1, 10, 11], "goal": 11, "get": [1, 7, 11], "student": [7, 11], "instructor": 11, "up": [1, 11], "run": [7, 10, 11], "quickli": 11, "patrick": 11, "wall": 11, "an": [1, 8, 9, 10, 11], "associ": 11, "professor": 11, "teach": 11, "undergradu": 11, "cours": 11, "differenti": [8, 11], "equat": [7, 8, 11], "linear": [8, 11], "algebra": [8, 11, 14], "optim": 11, "comput": [0, 7, 8, 9, 10, 11], "thi": [1, 10, 11], "work": 11, "creativ": 11, "common": 11, "attribut": 11, "noncommerci": 11, "sharealik": 11, "4": [0, 1, 8, 9, 10, 11, 14], "0": [0, 1, 8, 9, 10, 11, 14], "intern": 11, "open": [7, 11], "sourc": 11, "gener": [10, 11], "purpos": 11, "program": [8, 11], "languag": 11, "web": 11, "applic": 11, "creat": [0, 1, 7, 8, 9, 10, 11, 14], "docuemnt": [], "instanc": [10, 11], "jupyterhub": 11, "manag": [7, 11], "pacif": 11, "institut": 11, "scienc": 11, "syzyg": [], "host": [7, 11], "notebook": 11, "all": [0, 1, 7, 8, 10, 11, 14], "faculti": [7, 11], "staff": [7, 11], "ar": [0, 1, 8, 9, 10, 11, 14], "import": [0, 1, 7, 8, 9, 10, 11, 14], "part": 11, "mission": [], "check": [8, 9, 10, 11, 14], "out": [0, 8, 9, 10, 11, 14], "more": [1, 8, 9, 11, 14], "comprehens": 11, "introduct": 11, "document": [7, 11, 14], "numpi": [0, 1, 9, 10, 14], "np": [0, 1, 8, 9, 14], "scipi": 9, "linalg": 14, "la": 14, "matplotlib": [0, 1, 14], "pyplot": [0, 1, 10, 14], "plt": [0, 1, 10, 14], "A": [1, 7, 9, 10, 14], "collect": 14, "begin": [0, 1, 9, 10, 14], "arrai": [0, 1, 9, 10, 14], "ccccccccc": 14, "a_": 14, "x_0": [0, 1, 14], "1": [0, 1, 8, 9, 10, 14], "x_1": [0, 1, 10, 14], "cdot": [0, 1, 8, 10, 14], "n": [0, 1, 8, 9, 10, 14], "x_": [1, 14], "b_0": 14, "b_1": 14, "vdot": [0, 14], "b_": 14, "end": [0, 1, 9, 10, 14], "where": [1, 9, 10, 14], "number": [0, 9, 10, 14], "i": [0, 1, 9, 14], "j": [0, 9, 14], "b_i": 14, "known": 14, "coeffici": 14, "x_j": 14, "variabl": 14, "we": [0, 1, 7, 8, 10, 14], "can": [1, 8, 10, 14], "write": [0, 7, 9, 14], "matrix": [0, 9, 14], "mathbf": [0, 1, 9, 10, 14], "x": [0, 1, 8, 9, 10, 14], "b": [0, 1, 10, 14], "bmatrix": [0, 1, 9, 10, 14], "ddot": [0, 14], "hspace": [0, 14], "20mm": [0, 14], "combin": 14, "vector": [0, 1, 8, 9, 14], "augment": 14, "There": [0, 9, 14], "three": 14, "type": 14, "add": [0, 1, 10, 14], "multipl": [8, 10, 14], "one": [1, 14], "anoth": 14, "multipli": [1, 14], "scalar": [9, 14], "switch": 14, "function": [0, 1, 14], "call": 14, "add_row": 14, "which": [7, 10, 14], "take": [0, 8, 10, 14], "c": [0, 1, 14], "return": 14, "obtain": 14, "from": [0, 1, 8, 10, 14], "ad": 14, "time": [1, 7, 14], "def": 14, "astyp": 14, "float64": 14, "copi": [0, 14], "input": 14, "2": [0, 1, 8, 9, 10, 14], "3": [0, 1, 7, 8, 9, 10, 14], "print": [0, 1, 8, 9, 10, 14], "a1": 14, "6": [0, 1, 8, 9, 10, 14], "8": [1, 9, 14], "scale_row": 14, "a2": 14, "33333333": 14, "switch_row": 14, "pivot": 14, "first": [1, 8, 14], "nonzero": 14, "entri": [9, 14], "zero": [9, 14], "bottom": 14, "each": [0, 1, 9, 10, 14], "right": [1, 9, 14], "abov": [0, 1, 8, 9, 10, 14], "below": [1, 10, 14], "equal": [0, 1, 10, 14], "onli": 14, "its": [7, 14], "column": [0, 9, 14], "appli": [0, 1, 10, 14], "transform": 14, "follow": [0, 1, 10, 14], "m": [0, 1, 14], "left": [1, 7, 9, 14], "rrrr": [9, 14], "m1": 14, "5": [0, 1, 8, 9, 10, 14], "m2": 14, "success": 14, "now": [1, 14], "let": [0, 1, 8, 9, 10, 14], "s": [0, 1, 8, 9, 10, 14], "few": [10, 14], "step": [10, 14], "farther": 14, "m3": 14, "m4": 14, "66666667": 14, "m5": 14, "m6": 14, "m7": 14, "m8": 14, "In": [0, 1, 10, 14], "fact": 14, "have": 14, "copmut": [], "10mm": 14, "The": [0, 1, 8, 9, 10, 14], "solv": [8, 14], "uniqu": 14, "nonsingular": 14, "see": [0, 1, 7, 9, 14], "inform": 14, "For": [0, 1, 8, 9, 10, 14], "exampl": [1, 8, 9, 14], "previou": [1, 14], "section": 14, "mathemat": [9, 10, 14], "python": [7, 8, 9, 10, 14], "about": [0, 8, 9, 10, 14], "reduc": 14, "cmpute": 14, "basic": 0, "z": [0, 1], "f": [0, 1, 8, 10], "y": [0, 1, 8, 10], "over": [0, 1, 10], "interv": [0, 1, 10], "leq": [0, 1], "d": 0, "valu": [0, 1, 8, 10], "us": [0, 1, 8, 9, 10], "matric": [0, 8], "result": [0, 1, 10], "specifi": 0, "line": [0, 10], "color": [0, 1, 10], "bar": 0, "other": [0, 1, 10], "figur": [0, 1], "properti": 0, "xy": [0, 1], "2y": 0, "linspac": [0, 1], "51": 0, "level": 0, "grid": [0, 1], "true": [0, 1], "colorbar": 0, "show": [0, 1, 10], "sever": 0, "option": 0, "fill": [0, 1], "contourf": 0, "choos": [0, 1, 10], "differ": [0, 1], "colormap": 0, "cmap": 0, "set": [0, 10], "oppos": 0, "20": [0, 1, 10], "jet": 0, "x_m": 0, "y_0": 0, "y_1": 0, "y_n": 0, "note": [0, 1, 8, 9], "row": [0, 9], "point": [0, 1, 10], "think": [0, 10], "how": 0, "x_i": 0, "y_j": 0, "z_": 0, "ji": 0, "connect": [0, 10], "adjac": 0, "surfac": 0, "plane": 0, "repres": 0, "order": 0, "notat": 0, "therefor": [0, 1, 8], "functoin": [], "need": [0, 1, 8, 10], "do": [0, 1, 8], "past": 0, "modifi": 0, "code": [0, 1, 7, 10], "new": [0, 7, 9], "co": [0, 8, 10], "pi": [0, 10], "sin": [0, 8, 10], "101": [0, 10], "magma": 0, "3y": 0, "e": [0, 10], "exp": [0, 8, 10], "purd": 0, "respect": 0, "kind": 8, "problem": 8, "calculu": 8, "beyond": 8, "look": [8, 10], "some": 8, "foundat": 8, "concept": [8, 10], "relav": 8, "branch": 8, "http": [], "patrickwal": [], "github": [], "io": [], "mathematicalpython": [], "essenti": 8, "packag": [8, 10], "numer": 8, "It": [7, 8, 10], "includ": 8, "object": 8, "algeabra": 8, "keyword": [8, 10], "alia": [8, 10], "perform": 8, "usual": 8, "arithmet": 8, "oper": [8, 9], "syntax": [8, 9, 10], "addit": [8, 10], "subtract": [8, 9, 10], "divis": [8, 10], "exponenti": [8, 10], "recal": 8, "taylor": 8, "seri": 8, "sum_": [1, 8], "infti": [1, 8], "frac": [1, 8, 10], "term": 8, "approxim": [1, 8], "sqrt": [1, 8, 10], "approx": [1, 8], "6065104166666666": 8, "group": 8, "togeth": [1, 8], "parenthes": 8, "enter": [8, 9, 10], "141592653589793": 8, "718281828459045": 8, "also": [8, 10], "should": [7, 8], "when": [1, 7, 8], "instead": 8, "just": [8, 10], "like": 8, "familiar": 8, "easili": 8, "manipul": 8, "assign": 8, "2x": 8, "displai": 8, "7": [8, 9, 10], "dy": [1, 8], "standard": 8, "avail": 8, "tan": 8, "arctan": [8, 10], "ln": [8, 10], "log": 8, "log_": 8, "10": [1, 8, 10], "log10": 8, "7071067811865476": 8, "7071067811865475": 8, "6931471805599453": 8, "7853981633974483": 8, "3010299956639812": 8, "trigonometr": 8, "defin": [1, 8, 10], "radian": 8, "natur": 8, "logarithm": 8, "base": [1, 8], "lambda": [1, 8], "simplest": 9, "wai": 9, "squar": 9, "bracket": 9, "separ": 9, "space": 10, "comma": 9, "semicolon": [], "9": [9, 10], "ones": 9, "ey": 9, "diag": 9, "ident": [9, 10], "size": [9, 10], "diagon": 9, "upper": 9, "lower": 9, "two": 9, "put": [1, 9], "them": 9, "c1": [1, 9], "c2": [1, 9], "r1": 9, "r2": 9, "block": 9, "phantom": 9, "rrrrr": 9, "access": 9, "consid": [1, 9], "colon": 9, "select": [1, 9], "entir": [1, 9], "fundament": 10, "idea": 10, "simpl": 10, "veri": 10, "power": 10, "ani": [1, 10], "x_2": 10, "x_3": 10, "x_n": [1, 10], "elementwis": 10, "simultan": 10, "simplifi": 10, "matlab": [], "learn": [], "wikipedia": [], "discuss": [], "To": 10, "graph": 10, "finit": 10, "increas": [1, 10], "correspond": [1, 10], "dot": [1, 10], "pair": 10, "consecut": 10, "straight": 10, "make": [1, 10], "observ": 10, "larger": 10, "produc": 10, "smoother": 10, "requir": [1, 10], "memori": [1, 10], "store": 10, "own": [7, 10], "judgement": 10, "larg": 10, "enough": 10, "so": [1, 9, 10], "smooth": 10, "small": [1, 10], "amount": 10, "too": 10, "big": 10, "command": [1, 10], "script": 10, "smoothli": [1, 10], "ineffici": 10, "manual": 10, "did": 10, "style": [1, 10], "titl": [1, 10], "legend": 10, "etc": 10, "601": 10, "01": 10, "closer": 10, "increment": [], "2000": [], "4000": [], "6000": [], "8000": [], "0000": [], "word": [1, 10], "x_k": [1, 10], "k": 1, "05": [], "00": 10, "11": 1, "50": 10, "95": [], "21": 10, "length": 1, "0500": [], "5000": [], "9500": [], "allow": [], "user": [], "between": [1, 10], "sometim": [], "help": [], "total": [], "evenli": 10, "1250": [], "2500": [], "3750": [], "6250": [], "7500": [], "8750": [], "given": [1, 10], "x1": [], "x2": [], "mean": [1, 10], "y1": 10, "y2": 10, "7071": [], "clearli": 10, "100": [1, 10], "alreadi": 10, "xe": 10, "25": 10, "1947": [], "3033": [], "3543": [], "3679": [], "y_k": [1, 10], "same": [1, 10], "verbos": 10, "75": 10, "displaystyl": 10, "200": 10, "500": 10, "without": 10, "predict": 10, "solut": 1, "389400391535702": [], "367879441171442": [], "list": 9, "r0": 9, "rn": 9, "row_stack": 9, "column_stack": 9, "b1": 9, "b2": 9, "alwai": 9, "start": [1, 7, 9], "whenev": 10, "main": 10, "lot": 10, "subpackag": 10, "primarili": 10, "2d": 10, "th": 10, "125": 10, "375": 10, "625": 10, "875": 10, "h": 10, "00000000e": 10, "07106781e": 10, "22464680e": 10, "16": 10, "1947002": 10, "30326533": 10, "35427491": 10, "36787944": 10, "pyton": 10, "cc": [], "BY": [], "nc": [], "sa": [], "math": 7, "latex": 7, "explanatori": 7, "text": 7, "markdown": 7, "noteobok": 7, "ha": 7, "file": 7, "extens": 7, "ipynb": 7, "json": 7, "format": [1, 7], "raw": 7, "form": [1, 7], "ubc": 7, "login": 7, "your": 7, "cwl": 7, "develop": 7, "environ": 7, "onc": 7, "you": 7, "interfac": 7, "click": 7, "ipykernel": 7, "launcher": 7, "window": 7, "folder": 7, "current": 7, "icon": 7, "top": 7, "upload": 7, "refresh": 7, "everi": 7, "launch": 7, "process": 7, "stop": 7, "button": 7, "view": 7, "close": 7, "cloud": 7, "shutdown": 7, "distribut": 7, "instal": 7, "machin": 7, "definit": 1, "int_a": 1, "dx": 1, "net": 1, "area": 1, "curv": 1, "rectangl": 1, "particular": 1, "integ": 1, "delta": 1, "partit": 1, "subinterv": 1, "height": 1, "endpoint": 1, "r": 1, "l": 1, "limit": 1, "lim_": 1, "plot": 1, "consist": 1, "rang": 1, "c0": 1, "alpha": 1, "outlin": 1, "mani": 1, "procedur": 1, "index": 1, "exercis": 1, "int_0": 1, "know": 1, "exact": 1, "compar": 1, "higher": 1, "give": 1, "better": 1, "later": 1, "verifi": 1, "dex": 1, "96": 1, "84": 1, "64": 1, "36": 1, "5599999999999998": 1, "cell": 1, "64125": 1, "y_": 1, "substitut": 1, "rewrit": 1, "exactli": 1, "6912499999999999": 1, "approach": 1, "averag": 1, "t": 1, "5997333440000003": 1, "int_": 1, "converg": 1, "region": 1, "bound": 1, "iint_r": 1, "kl": 1, "what": 1, "doe": 1, "mathbb": 1, "g": 1, "volum": 1, "rectangular": 1, "prism": 1, "maxf": 1, "maximum": 1, "transpar": 1, "40": 1, "lw": 1, "lk": 1, "save": 1, "i_k": 1, "1000": 1, "fk": 1, "7345113601794344": 1, "_0": 1, "15": 1, "7333333333333333": 1, "sinc": 1, "both": 1, "directoin": 1, "choic": 1, "fk1": 1, "fk2": 1, "fk3": 1, "fk4": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"contour": 0, "plot": [0, 10], "numer": [1, 5], "integr": 1, "slope": 3, "field": 3, "euler": 4, "s": 4, "method": 4, "solut": [5, 14], "odeint": 5, "system": [6, 14], "differenti": 6, "equat": [6, 14], "elementari": [8, 14], "mathemat": [8, 11], "work": 9, "matric": 9, "jupyterlab": 7, "syzygi": 7, "vector": [10, 13], "python": 11, "jupyt": [7, 11], "ubc": 11, "about": 11, "author": 11, "licens": 11, "eigenvalu": 12, "eigenvector": 12, "geometri": 13, "linear": [14, 15], "transform": 15, "terminolog": 14, "row": 14, "oper": [10, 14], "reduc": [], "echelon": 14, "form": 14, "comput": [1, 14], "optim": 2, "scipi": 14, "procedur": [0, 10], "what": 0, "meshgrid": 0, "exampl": [0, 10], "numpi": 8, "number": 8, "constant": 8, "pi": 8, "e": 8, "variabl": 8, "function": [8, 9, 10], "custom": 8, "manual": 9, "construct": 9, "concaten": [], "addit": 9, "multipl": 9, "index": 9, "basic": 10, "h": [], "b": [], "linspac": 10, "arithmet": 10, "more": 10, "exercis": 10, "stack": 9, "matplotlib": 10, "np": 10, "notebook": 7, "shutdown": [], "kernel": 7, "anaconda": 7, "visual": 1, "riemann": 1, "sum": 1, "trapezoid": 1, "rule": 1, "doubl": 1, "doulb": [], "tripl": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})