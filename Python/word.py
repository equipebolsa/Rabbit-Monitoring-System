from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt
from datetime import date
import numpy as np

def plotarWordcloud(frases):
	stopwords = set(STOPWORDS)
	stopwords.update(["a","o","da", "meu", "em", "de", "ao", "os"])
	#datafromfile=np.loadtxt("stoplists/stopwords_Portugues.txt",dtype="str")
	#stopwords.update(datafromfile)


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
	data_atual = date.today()
	data_em_texto = '{}/{}/{}'.format(data_atual.day, data_atual.month,data_atual.year)
	data_em_texto = data_em_texto.replace("/","-")
	nome="wordlcloud-"+data_em_texto
	nome +=".png"
	plt.savefig("Site/public/dashboard/img/wordcloud/"+nome)
