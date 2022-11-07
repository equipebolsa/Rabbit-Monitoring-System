from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt
from datetime import date
import numpy as np

def plotarWordcloud(frases):
	stopwords = set(STOPWORDS)
	stopwords.update(["a","o","da", "meu", "em", "de", "ao", "os"])
	datafromfile=np.loadtxt("stoplists/stopwords_Portugues.txt",dtype="str")
	stopwords.update(datafromfile)


	lista = frases.lower()
	comment_words = str(lista)

	wordcloud = WordCloud(width = 800, height = 800,
				background_color ='white',
                stopwords = stopwords,
				min_font_size = 1).generate(comment_words)

# plot the WordCloud image					
	plt.figure(figsize = (8, 8), facecolor = None)
	plt.imshow(wordcloud)
	plt.axis("off")
	plt.tight_layout(pad = 0)
	nome="wordlcloud "+date.today().strftime("%b-%d-%Y")
	nome +=".png"
	plt.savefig("../Site/public/dashboard/img/wordcloud/"+nome)
