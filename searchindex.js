Search.setIndex({"docnames": ["calculus/contour", "calculus/integration", "calculus/optimization", "differential-equations/graphical", "differential-equations/numerical", "differential-equations/odeint", "differential-equations/systems", "getting-started/mathematics", "getting-started/matrices", "getting-started/syzygy", "getting-started/vectorization", "index", "linear-algebra/eigenvalues", "linear-algebra/geometry", "linear-algebra/systems", "linear-algebra/transformations"], "filenames": ["calculus/contour.ipynb", "calculus/integration.ipynb", "calculus/optimization.ipynb", "differential-equations/graphical.ipynb", "differential-equations/numerical.ipynb", "differential-equations/odeint.ipynb", "differential-equations/systems.ipynb", "getting-started/mathematics.ipynb", "getting-started/matrices.ipynb", "getting-started/syzygy.ipynb", "getting-started/vectorization.ipynb", "index.md", "linear-algebra/eigenvalues.ipynb", "linear-algebra/geometry.ipynb", "linear-algebra/systems.ipynb", "linear-algebra/transformations.ipynb"], "titles": ["Contour Plots", "Numerical Integration", "Optimization", "Slope Fields", "Euler\u2019s Method", "Numerical Solutions with odeint", "Systems of Differential Equations", "Elementary Mathematics", "Working with Matrices", "JupyterLab and Syzygy", "Vectorization and Plotting", "Python and Jupyter for UBC Mathematics", "Eigenvalues and Eigenvectors", "Vector Geometry", "Systems of Linear Equations", "Linear Transformations"], "terms": {"under": [1, 2, 3, 4, 5, 6, 9, 11, 12, 13, 15], "construct": [1, 2, 3, 4, 5, 6, 9, 12, 13, 15], "syzygi": 11, "depart": 11, "univers": 11, "british": 11, "columbia": 11, "our": [10, 11], "goal": 11, "get": 11, "student": 11, "instructor": 11, "up": 11, "run": [10, 11], "quickli": 11, "patrick": 11, "wall": 11, "an": [7, 8, 10, 11], "associ": 11, "professor": 11, "teach": 11, "undergradu": 11, "cours": 11, "differenti": [7, 11], "equat": [7, 11], "linear": [7, 11], "algebra": [7, 11, 14], "optim": 11, "comput": [0, 7, 8, 10, 11], "thi": [10, 11], "work": 11, "creativ": 11, "common": 11, "attribut": 11, "noncommerci": 11, "sharealik": 11, "4": [0, 7, 8, 10, 11, 14], "0": [0, 7, 8, 10, 11, 14], "intern": 11, "open": 11, "sourc": 11, "gener": [10, 11], "purpos": 11, "program": [7, 11], "languag": 11, "web": 11, "applic": 11, "creat": [0, 7, 8, 10, 11, 14], "docuemnt": [], "instanc": [10, 11], "jupyterhub": 11, "manag": 11, "pacif": 11, "institut": 11, "scienc": 11, "syzyg": [], "host": 11, "notebook": 11, "all": [0, 7, 10, 11, 14], "faculti": 11, "staff": 11, "ar": [0, 7, 8, 10, 11, 14], "import": [0, 7, 8, 10, 11, 14], "part": 11, "mission": [], "check": [7, 8, 10, 11, 14], "out": [0, 7, 8, 10, 11, 14], "more": [7, 8, 11, 14], "comprehens": 11, "introduct": 11, "document": [11, 14], "numpi": [0, 8, 10, 14], "np": [0, 7, 8, 14], "scipi": 8, "linalg": 14, "la": 14, "matplotlib": [0, 14], "pyplot": [0, 10, 14], "plt": [0, 10, 14], "A": [8, 10, 14], "collect": 14, "begin": [0, 8, 10, 14], "arrai": [0, 8, 10, 14], "ccccccccc": 14, "a_": 14, "x_0": [0, 14], "1": [0, 7, 8, 10, 14], "x_1": [0, 10, 14], "cdot": [0, 7, 10, 14], "n": [0, 7, 8, 10, 14], "x_": 14, "b_0": 14, "b_1": 14, "vdot": [0, 14], "b_": 14, "end": [0, 8, 10, 14], "where": [8, 10, 14], "number": [0, 8, 10, 14], "i": [0, 8, 14], "j": [0, 8, 14], "b_i": 14, "known": 14, "coeffici": 14, "x_j": 14, "variabl": 14, "we": [0, 7, 10, 14], "can": [7, 10, 14], "write": [0, 8, 14], "matrix": [0, 8, 14], "mathbf": [0, 8, 10, 14], "x": [0, 7, 8, 10, 14], "b": [0, 10, 14], "bmatrix": [0, 8, 10, 14], "ddot": [0, 14], "hspace": [0, 14], "20mm": [0, 14], "combin": 14, "vector": [0, 7, 8, 14], "augment": 14, "There": [0, 8, 14], "three": 14, "type": 14, "add": [0, 10, 14], "multipl": [7, 10, 14], "one": 14, "anoth": 14, "multipli": 14, "scalar": [8, 14], "switch": 14, "function": [0, 14], "call": 14, "add_row": 14, "which": [10, 14], "take": [0, 7, 10, 14], "c": [0, 14], "return": 14, "obtain": 14, "from": [0, 7, 10, 14], "ad": 14, "time": 14, "def": 14, "astyp": 14, "float64": 14, "copi": [0, 14], "input": 14, "2": [0, 7, 8, 10, 14], "3": [0, 7, 8, 10, 14], "print": [0, 7, 8, 10, 14], "a1": 14, "6": [0, 7, 8, 10, 14], "8": [8, 14], "scale_row": 14, "a2": 14, "33333333": 14, "switch_row": 14, "pivot": 14, "first": [7, 14], "nonzero": 14, "entri": [8, 14], "zero": [8, 14], "bottom": 14, "each": [0, 8, 10, 14], "right": [8, 14], "abov": [0, 7, 8, 10, 14], "below": [10, 14], "equal": [0, 10, 14], "onli": 14, "its": 14, "column": [0, 8, 14], "appli": [0, 10, 14], "transform": 14, "follow": [0, 10, 14], "m": [0, 14], "left": [8, 14], "rrrr": [8, 14], "m1": 14, "5": [0, 7, 8, 10, 14], "m2": 14, "success": 14, "now": 14, "let": [0, 7, 8, 10, 14], "s": [0, 7, 8, 10, 14], "few": [10, 14], "step": [10, 14], "farther": 14, "m3": 14, "m4": 14, "66666667": 14, "m5": 14, "m6": 14, "m7": 14, "m8": 14, "In": [0, 10, 14], "fact": 14, "have": 14, "copmut": [], "10mm": 14, "The": [0, 7, 8, 10, 14], "solv": [7, 14], "uniqu": 14, "nonsingular": 14, "see": [0, 8, 14], "inform": 14, "For": [0, 7, 8, 10, 14], "exampl": [7, 8, 14], "previou": 14, "section": 14, "mathemat": [8, 10, 14], "python": [7, 8, 10, 14], "about": [0, 7, 8, 10, 14], "reduc": 14, "cmpute": 14, "basic": 0, "z": 0, "f": [0, 7, 10], "y": [0, 7, 10], "over": [0, 10], "interv": [0, 10], "leq": 0, "d": 0, "valu": [0, 7, 10], "us": [0, 7, 8, 10], "matric": [0, 7], "result": [0, 10], "specifi": 0, "line": [0, 10], "color": [0, 10], "bar": 0, "other": [0, 10], "figur": 0, "properti": 0, "xy": 0, "2y": 0, "linspac": 0, "51": 0, "level": 0, "grid": 0, "true": 0, "colorbar": 0, "show": [0, 10], "sever": 0, "option": 0, "fill": 0, "contourf": 0, "choos": [0, 10], "differ": 0, "colormap": 0, "cmap": 0, "set": [0, 10], "oppos": 0, "20": [0, 10], "jet": 0, "x_m": 0, "y_0": 0, "y_1": 0, "y_n": 0, "note": [0, 7, 8], "row": [0, 8], "point": [0, 10], "think": [0, 10], "how": 0, "x_i": 0, "y_j": 0, "z_": 0, "ji": 0, "connect": [0, 10], "adjac": 0, "surfac": 0, "plane": 0, "repres": 0, "order": 0, "notat": 0, "therefor": [0, 7], "functoin": [], "need": [0, 7, 10], "do": [0, 7], "past": 0, "modifi": 0, "code": [0, 10], "new": [0, 8], "co": [0, 7, 10], "pi": [0, 10], "sin": [0, 7, 10], "101": [0, 10], "magma": 0, "3y": 0, "e": [0, 10], "exp": [0, 7, 10], "purd": 0, "respect": 0, "kind": 7, "problem": 7, "calculu": 7, "beyond": 7, "look": [7, 10], "some": 7, "foundat": 7, "concept": [7, 10], "relav": 7, "branch": 7, "http": [], "patrickwal": [], "github": [], "io": [], "mathematicalpython": [], "essenti": 7, "packag": [7, 10], "numer": 7, "It": [7, 10], "includ": 7, "object": 7, "algeabra": 7, "keyword": [7, 10], "alia": [7, 10], "perform": 7, "usual": 7, "arithmet": 7, "oper": [7, 8], "syntax": [7, 8, 10], "addit": [7, 10], "subtract": [7, 8, 10], "divis": [7, 10], "exponenti": [7, 10], "recal": 7, "taylor": 7, "seri": 7, "sum_": 7, "infti": 7, "frac": [7, 10], "term": 7, "approxim": 7, "sqrt": [7, 10], "approx": 7, "6065104166666666": 7, "group": 7, "togeth": 7, "parenthes": 7, "enter": [7, 8, 10], "141592653589793": 7, "718281828459045": 7, "also": [7, 10], "should": 7, "when": 7, "instead": 7, "just": [7, 10], "like": 7, "familiar": 7, "easili": 7, "manipul": 7, "assign": 7, "2x": 7, "displai": 7, "7": [7, 8, 10], "dy": 7, "standard": 7, "avail": 7, "tan": 7, "arctan": [7, 10], "ln": [7, 10], "log": 7, "log_": 7, "10": [7, 10], "log10": 7, "7071067811865476": 7, "7071067811865475": 7, "6931471805599453": 7, "7853981633974483": 7, "3010299956639812": 7, "trigonometr": 7, "defin": [7, 10], "radian": 7, "natur": 7, "logarithm": 7, "base": 7, "lambda": 7, "simplest": 8, "wai": 8, "squar": 8, "bracket": 8, "separ": 8, "space": 10, "comma": 8, "semicolon": [], "9": [8, 10], "ones": 8, "ey": 8, "diag": 8, "ident": [8, 10], "size": [8, 10], "diagon": 8, "upper": 8, "lower": 8, "two": 8, "put": 8, "them": 8, "c1": 8, "c2": 8, "r1": 8, "r2": 8, "block": 8, "phantom": 8, "rrrrr": 8, "access": 8, "consid": 8, "colon": 8, "select": 8, "entir": 8, "fundament": 10, "idea": 10, "simpl": 10, "veri": 10, "power": 10, "ani": 10, "x_2": 10, "x_3": 10, "x_n": 10, "elementwis": 10, "simultan": 10, "simplifi": 10, "matlab": [], "learn": [], "wikipedia": [], "discuss": [], "To": 10, "graph": 10, "finit": 10, "increas": 10, "correspond": 10, "dot": 10, "pair": 10, "consecut": 10, "straight": 10, "make": 10, "observ": 10, "larger": 10, "produc": 10, "smoother": 10, "requir": 10, "memori": 10, "store": 10, "own": 10, "judgement": 10, "larg": 10, "enough": 10, "so": [8, 10], "smooth": 10, "small": 10, "amount": 10, "too": 10, "big": 10, "command": 10, "script": 10, "smoothli": 10, "ineffici": 10, "manual": 10, "did": 10, "style": 10, "titl": 10, "legend": 10, "etc": 10, "601": 10, "01": 10, "closer": 10, "increment": [], "2000": [], "4000": [], "6000": [], "8000": [], "0000": [], "word": 10, "x_k": 10, "k": [], "05": [], "00": 10, "11": [], "50": 10, "95": [], "21": 10, "length": [], "0500": [], "5000": [], "9500": [], "allow": [], "user": [], "between": 10, "sometim": [], "help": [], "total": [], "evenli": 10, "1250": [], "2500": [], "3750": [], "6250": [], "7500": [], "8750": [], "given": 10, "x1": [], "x2": [], "mean": 10, "y1": 10, "y2": 10, "7071": [], "clearli": 10, "100": 10, "alreadi": 10, "xe": 10, "25": 10, "1947": [], "3033": [], "3543": [], "3679": [], "y_k": 10, "same": 10, "verbos": 10, "75": 10, "displaystyl": 10, "200": 10, "500": 10, "without": 10, "predict": 10, "solut": [], "389400391535702": [], "367879441171442": [], "list": 8, "r0": 8, "rn": 8, "row_stack": 8, "column_stack": 8, "b1": 8, "b2": 8, "alwai": 8, "start": 8, "whenev": 10, "main": 10, "lot": 10, "subpackag": 10, "primarili": 10, "2d": 10, "th": 10, "125": 10, "375": 10, "625": 10, "875": 10, "h": 10, "00000000e": 10, "07106781e": 10, "22464680e": 10, "16": 10, "1947002": 10, "30326533": 10, "35427491": 10, "36787944": 10, "pyton": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"contour": 0, "plot": [0, 10], "numer": [1, 5], "integr": 1, "slope": 3, "field": 3, "euler": 4, "s": 4, "method": 4, "solut": [5, 14], "odeint": 5, "system": [6, 14], "differenti": 6, "equat": [6, 14], "elementari": [7, 14], "mathemat": [7, 11], "work": 8, "matric": 8, "jupyterlab": 9, "syzygi": 9, "vector": [10, 13], "python": 11, "jupyt": 11, "ubc": 11, "about": 11, "author": 11, "licens": 11, "eigenvalu": 12, "eigenvector": 12, "geometri": 13, "linear": [14, 15], "transform": 15, "terminolog": 14, "row": 14, "oper": [10, 14], "reduc": [], "echelon": 14, "form": 14, "comput": 14, "optim": 2, "scipi": 14, "procedur": [0, 10], "what": 0, "meshgrid": 0, "exampl": [0, 10], "numpi": 7, "number": 7, "constant": 7, "pi": 7, "e": 7, "variabl": 7, "function": [7, 8, 10], "custom": 7, "manual": 8, "construct": 8, "concaten": [], "addit": 8, "multipl": 8, "index": 8, "basic": 10, "h": [], "b": [], "linspac": 10, "arithmet": 10, "more": 10, "exercis": 10, "stack": 8, "matplotlib": 10, "np": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})