import matplotlib.pyplot as plt
import rpy2.robjects as robjects
from rpy2.robjects.packages import importr

robjects.r('csvFinal <- read.csv("./csvFinal.csv")')

robjects.r('data.frame(csvFinal)')

print(robjects.r('View(csvFinal)'))

robjects.r('linearModelCpu <- lm(cpu~ram, data = csvFinal)')
robjects.r('linearModelRam <- lm(ram~cpu, data = csvFinal)')

robjects.r('predictionCpu <- predict(linearModelCpu)')
robjects.r('predictionRam <- predict(linearModelRam)')

print(robjects.r('predictionCpu'))
print(robjects.r('predictionRam'))

plt.plot(robjects.r('predictionCpu'))
plt.plot(robjects.r('predictionRam'))
plt.title('Previsão da CPU e da RAM')
plt.xlabel('Dados capturados')
plt.ylabel('Porcentagem')
plt.legend(['CPU','RAM'])
plt.savefig('predict.png', format='png')
plt.show()

